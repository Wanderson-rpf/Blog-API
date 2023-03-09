const express = require('express');
const { BlogPostController } = require('../controllers');
const validationToken = require('../middleware/validationToken');

const router = express.Router();

// router.get(
//   '/',
//   validationToken,
//   BlogPostController.getAllCategory,
// );

router.post(
  '/',
  validationToken,
  BlogPostController.createBlogPost,
);

module.exports = router;