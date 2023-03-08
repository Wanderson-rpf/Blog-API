const { CategoryService } = require('../services');

const getAllCategory = async (_req, res) => {
  try {
    const { type, message } = await CategoryService.getAllCategory();

    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const { type, message } = await CategoryService.createCategory(req.body);
  
    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  getAllCategory,
  createCategory,
};
