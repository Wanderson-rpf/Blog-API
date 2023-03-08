const { UserService } = require('../services');

const getAllUser = async (_req, res) => {
  try {
    const { type, message } = await UserService.getAllUser();
  return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

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
  getAllUser,
  createUser,
};