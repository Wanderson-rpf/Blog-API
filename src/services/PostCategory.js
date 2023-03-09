const { PostCategory } = require('../models');

const createCategoryPost = async (categoryNewPost, postId) => {
  await Promise.all(categoryNewPost
    .map(async (categoryId) => PostCategory.create({ postId, categoryId })));
};

module.exports = {
  createCategoryPost,
};