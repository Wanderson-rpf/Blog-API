const { User } = require('../models');
const { tokenGenerate } = require('../utils/tokenGenerate');
const validateUserData = require('./validations/userValidations');

const getByUserEmail = async (email) => {
  const userData = User.findOne(
    { where: { email }, 
  },
);
  return userData;
};

const createUser = async (newUserData) => {
  const error = validateUserData(newUserData);
  if (error) return { type: error.type, message: error.message };
  
  const { password: _, ...userWithoutPassword } = newUserData;
  const token = tokenGenerate(userWithoutPassword);
  await User.create(newUserData);

  return { type: 201, message: { token } };
};

module.exports = {
  getByUserEmail,
  createUser,
};