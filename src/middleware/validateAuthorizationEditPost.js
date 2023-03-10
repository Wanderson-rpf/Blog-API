module.exports = async (req, res, next) => {
  const { id: authorPost } = req.dataUser.payload;
  const { id } = req.params;

  if (Number(authorPost) !== Number(id)) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  return next();
};