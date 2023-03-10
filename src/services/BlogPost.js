const { BlogPost, User, Category } = require('../models');
const { getAllCategory } = require('./Category');
const { createCategoryPost } = require('./PostCategory');
const editPostValidate = require('./validations/editPostValidate');
const newPostValidate = require('./validations/newPostValidate');
const postCategoryIdValidate = require('./validations/postCategoryIdValidate');
const postIdValidate = require('./validations/postIdValidate');

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, 
        as: 'user', 
        attributes: { exclude: ['password'] },
      },
      { model: Category,
        as: 'categories',
        attributes: { exclude: ['PostCategory'] },
      },
    ],
  });

  return { type: 200, message: allPosts };
};

const getByIdPosts = async (id) => {
  const listAllPosts = await getAllPosts();

  const errorId = await postIdValidate([Number(id)], listAllPosts);
  if (errorId) return { type: errorId.type, message: errorId.message };

  const [post] = await BlogPost.findAll({
    where: { id },
    include: [
      { model: User, 
        as: 'user', 
        attributes: { exclude: ['password'] },
      },
      { model: Category,
        as: 'categories',
        attributes: { exclude: ['PostCategory'] },
      },
    ],
  });

  return { type: 200, message: post };
};

const createBlogPost = async (newPost, userId) => {
  const error = newPostValidate(newPost);
  if (error) return { type: error.type, message: error.message };
  
  const listAllCategory = await getAllCategory();
  const errorId = await postCategoryIdValidate(newPost.categoryIds, listAllCategory);
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

const updateBlogPost = async (newDataPost, id) => {
  const error = editPostValidate(newDataPost);
  if (error) return { type: error.type, message: error.message };

  await BlogPost.update(newDataPost, {
    where: { id },
  });

  const newPost = await getByIdPosts(id);
  return { type: 200, message: newPost.message };
};

const deleteBlogPost = async (id) => {
  await BlogPost.destroy({ 
    where: { id },
  });
  return { type: 204, message: '' };
};

module.exports = {
  getAllPosts,
  getByIdPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
};