const { BlogPostService } = require('../services');

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
  createBlogPost,
};