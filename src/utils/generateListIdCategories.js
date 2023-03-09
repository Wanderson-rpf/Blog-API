const { getAllCategory } = require('../services/Category');

module.exports = async () => {
  const allCategories = await getAllCategory();

  const listIdAllCategories = allCategories.message
  .map((category) => category.id);

  return listIdAllCategories;
};