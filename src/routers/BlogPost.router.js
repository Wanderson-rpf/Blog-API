const express = require('express');
const { BlogPostController } = require('../controllers');
const validateAuthorizationEditPost = require('../middleware/validateAuthorizationEditPost');
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
  
router.put(
  '/:id',
  validationToken,
  validateAuthorizationEditPost,
  BlogPostController.updateBlogPost,
);
module.exports = router;