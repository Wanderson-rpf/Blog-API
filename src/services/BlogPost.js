const { BlogPost } = require('../models');
const { createCategoryPost } = require('./PostCategory');
const newPostValidate = require('./validations/newPostValidate');
const postCategoryIdValidate = require('./validations/postCategoryIdValidate');

const createBlogPost = async (newPost, userId) => {
  const error = newPostValidate(newPost);
  if (error) return { type: error.type, message: error.message };
  
  const errorId = await postCategoryIdValidate(newPost.categoryIds);
  if (errorId) return { type: errorId.type, message: errorId.message };
  
  const newBlogPost = {
    ...newPost,
    userId,
    published: new Date(),
    updated: new Date(),
  };
  
  const postCreated = await BlogPost.create(newBlogPost);
  await createCategoryPost(newPost.categoryIds, postCreated.id);

  return { type: 201, message: postCreated };
};

module.exports = {
  createBlogPost,
};