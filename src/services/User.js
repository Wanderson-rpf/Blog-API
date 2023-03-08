const { User } = require('../models');
const { tokenGenerate } = require('../utils/tokenGenerate');
const validateUserData = require('./validations/userValidations');

const getByUserEmail = async (email) => {
  const userData = await User.findOne(
    { where: { email }, 
  },
);
  return userData;
};

const getAllUser = async () => {
  const allUsers = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return { type: 200, message: allUsers };
};

const getById = async (id) => {
  const [user] = await User.findAll({
    where: { id },
    attributes: {
      exclude: ['password'],
    },
  });

  if (!user) return { type: 404, message: { message: 'User does not exist' } };

  return { type: 200, message: user };
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
  getAllUser,
  getById,
  createUser,
};