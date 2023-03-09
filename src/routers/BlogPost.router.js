const express = require('express');
const { BlogPostController } = require('../controllers');
const validationToken = require('../middleware/validationToken');

const router = express.Router();

router.get(
  '/',
  validationToken,
  BlogPostController.getAllPosts,
);

router.get(
  '/:id',
  validationToken,
  BlogPostController.getByIdPosts,
);

router.post(
  '/',
  validationToken,
  BlogPostController.createBlogPost,
);

module.exports = router;