const { BlogPostService } = require('../services');

const getAllPosts = async (_req, res) => {
  try {
    const { type, message } = await BlogPostService.getAllPosts();

    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getByIdPosts = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, message } = await BlogPostService.getByIdPosts(id);

    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createBlogPost = async (req, res) => {
  try {
    const idUser = req.dataUser.payload.id;
    const { type, message } = await BlogPostService.createBlogPost(req.body, idUser);
  
    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const newDataPost = req.body;
    const { type, message } = await BlogPostService.updateBlogPost(newDataPost, id);
  
    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteBlogPost = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const { type, message } = await BlogPostService.deleteBlogPost(postId);
  
    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const searchBlogPost = async (req, res) => {
  try {
    const { q: dataSearch } = req.query;
    const { type, message } = await BlogPostService.searchBlogPost(dataSearch);

    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPosts,
  getByIdPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  searchBlogPost,
};