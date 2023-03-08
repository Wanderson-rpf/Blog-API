const { UserService } = require('../services');

const validateLogin = async (req, res, next) => {
  const isBodyValid = (email, pwd) => email && pwd;
  const { email, password } = req.body;

  if (!isBodyValid(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await UserService.getByUserEmail(email);
  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return next();
};

module.exports = validateLogin;