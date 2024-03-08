const { postService } = require('../services');

const validatePost = async (req, res, next) => {
  const { id } = req.params;
  const post = await postService.getById(id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  req.retrievedPost = post;

  next();
};

module.exports = validatePost;