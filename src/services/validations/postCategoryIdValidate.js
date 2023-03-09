const generateListIdCategories = require('../../utils/generateListIdCategories');

module.exports = async (arrayOfIdsForValidate) => {
  const listIdAllCategories = await generateListIdCategories();
  console.log('list all categories:', listIdAllCategories);
  console.log('list IDs:', arrayOfIdsForValidate);

  for (let i = 0; i < arrayOfIdsForValidate.length; i += 1) {
    console.log('estou no FOR:', arrayOfIdsForValidate[i]);
    if (!listIdAllCategories.includes(arrayOfIdsForValidate[i])) {
      return { type: 400, message: 'one or more "categoryIds" not found' };
    }
  }
  return false;
};