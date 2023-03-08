const { newDataSchema } = require('./schema');

const validateUserData = (userData) => {
  const { error } = newDataSchema.validate(userData);
  if (error) return { type: 400, message: { message: error.message } };
};

module.exports = validateUserData;