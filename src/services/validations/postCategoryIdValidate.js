const generateListIdCategories = require('../../utils/generateListIdCategories');

module.exports = async (arrayOfIdsForValidate) => {
  const listIdAllCategories = await generateListIdCategories();

  for (let i = 0; i < arrayOfIdsForValidate.length; i += 1) {
    if (!listIdAllCategories.includes(arrayOfIdsForValidate[i])) {
      return { type: 400, message: { message: 'one or more "categoryIds" not found' } };
    }
  }
  return false;
};