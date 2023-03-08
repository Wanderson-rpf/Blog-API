const express = require('express');
const { CategoryController } = require('../controllers');
const validationToken = require('../middleware/validationToken');

const router = express.Router();

router.post(
  '/',
  validationToken,
  CategoryController.createCategory,
);

module.exports = router;