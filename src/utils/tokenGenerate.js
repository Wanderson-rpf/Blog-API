require('dotenv').config();
const jwt = require('jsonwebtoken');

const tokenGenerate = (userDataValues) => {
  try {
    const secret = process.env.JWT_SECRET;
    const jwtConfig = {
      algorithm: 'HS256',
      expiresIn: '7d',
    };

  const token = jwt.sign(
    { payload: userDataValues }, 
    secret, 
    jwtConfig,
  );

  return token;
  } catch (error) {
    return `Erro interno: ${error.message}`;
  }  
};

module.exports = {
  tokenGenerate,
};