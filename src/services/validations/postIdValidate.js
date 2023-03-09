const generateListId = require('../../utils/generateListId');

module.exports = async (arrayOfIdsForValidate, allPosts) => {
  const listIdAllPosts = await generateListId(allPosts);

  for (let i = 0; i < arrayOfIdsForValidate.length; i += 1) {
    if (!listIdAllPosts.includes(arrayOfIdsForValidate[i])) {
      return { type: 404, message: { message: 'Post does not exist' } };
    }
  }
  return false;
};