module.exports = (newDataCategory) => {
  if (!newDataCategory.name) {
    return { type: 400, message: { message: '"name" is required' } };
  }
  return false;
};