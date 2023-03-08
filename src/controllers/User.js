const { UserService } = require('../services');

const createUser = async (req, res) => {
  try {
    const hasEmail = await UserService.getByUserEmail(req.body.email);
    if (hasEmail) return res.status(409).json({ message: 'User already registered' });
    const { type, message } = await UserService.createUser(req.body);
  
    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  createUser,
};