const { Category } = require('../models');
const categoryValidate = require('./validations/categoryValidate');

const createCategory = async (newDataCategory) => {
  const error = categoryValidate(newDataCategory);
  if (error) return { type: error.type, message: error.message };

  const newCategory = await Category.create(newDataCategory);

  return { type: 201, message: newCategory.dataValues };
};

module.exports = {
  createCategory,
};