const { BlogPostService } = require('../services');

module.exports = async (req, res, next) => {
  const { id: postId } = req.params;
  const { id: authorPost } = req.dataUser.payload;

  const post = await BlogPostService.getByIdPosts(postId);
  const userLogged = post.message.userId;

  if (Number(authorPost) !== Number(userLogged)) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  return next();
};