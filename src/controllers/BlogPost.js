const { BlogPostService } = require('../services');

const getAllPosts = async (_req, res) => {
  try {
    const { type, message } = await BlogPostService.getAllPosts();

    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const getByIdPosts = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, message } = await BlogPostService.getByIdPosts(id);

    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const createBlogPost = async (req, res) => {
  try {
    const idUser = req.dataUser.payload.id;
    const { type, message } = await BlogPostService.createBlogPost(req.body, idUser);
  
    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  getAllPosts,
  getByIdPosts,
  createBlogPost,
};