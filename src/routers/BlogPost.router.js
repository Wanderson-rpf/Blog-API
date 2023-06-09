const express = require('express');
const { BlogPostController } = require('../controllers');
const validateAuthorizationEditPost = require('../middleware/validateAuthorizationEditPost');
const validateHasId = require('../middleware/validateHasId');
const validationToken = require('../middleware/validationToken');

const router = express.Router();

router.get(
  '/search',
  validationToken,
  BlogPostController.searchBlogPost,
);

router.get(
  '/:id',
  validationToken,
  BlogPostController.getByIdPosts,
);

router.put(
  '/:id',
  validationToken,
  validateAuthorizationEditPost,
  BlogPostController.updateBlogPost,
);

router.delete(
  '/:id',
  validationToken,
  validateHasId,
  validateAuthorizationEditPost,
  BlogPostController.deleteBlogPost,
);

router.get(
  '/',
  validationToken,
  BlogPostController.getAllPosts,
);

router.post(
  '/',
  validationToken,
  BlogPostController.createBlogPost,
  );
module.exports = router;