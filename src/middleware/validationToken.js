const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const payload = jwt.verify(authorization, process.env.JWT_SECRET);
  req.dataUser = payload;
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  
  return next();
};