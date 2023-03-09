const { newPostDataSchema } = require('./schema');

module.exports = (newPost) => {
  const { error } = newPostDataSchema.validate(newPost);
  if (error) return { type: 400, message: { message: error.message } };

  return false;
};