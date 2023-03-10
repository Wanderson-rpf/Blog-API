const { editPostDataSchema } = require('./schema');

module.exports = (newPost) => {
  const { error } = editPostDataSchema.validate(newPost);
  if (error) return { type: 400, message: { message: error.message } };

  return false;
};