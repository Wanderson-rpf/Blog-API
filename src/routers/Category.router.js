const express = require('express');
const { CategoryController } = require('../controllers');
const validationToken = require('../middleware/validationToken');

const router = express.Router();

router.get(
  '/',
  validationToken,
  CategoryController.getAllCategory,
);

router.post(
  '/',
  validationToken,
  CategoryController.createCategory,
);

module.exports = router;