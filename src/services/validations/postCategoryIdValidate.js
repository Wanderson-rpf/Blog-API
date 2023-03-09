const generateListId = require('../../utils/generateListId');

module.exports = async (arrayOfIdsForValidate, allPosts) => {
  const listIdAllCategories = await generateListId(allPosts);

  for (let i = 0; i < arrayOfIdsForValidate.length; i += 1) {
    if (!listIdAllCategories.includes(arrayOfIdsForValidate[i])) {
      return { type: 400, message: { message: 'one or more "categoryIds" not found' } };
    }
  }
  return false;
};