const { getAllPosts } = require('../services/BlogPost');
const postIdValidate = require('../services/validations/postIdValidate');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const listAllPosts = await getAllPosts();
    const errorId = await postIdValidate([Number(id)], listAllPosts);

    if (errorId) return res.status(errorId.type).json(errorId.message);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
  return next();
};