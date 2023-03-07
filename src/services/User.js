const { User } = require('../models');

const getByUserEmail = async (email) => {
  const userData = User.findOne(
    { where: { email }, 
  },
);

  return userData;
};

module.exports = {
  getByUserEmail,
};