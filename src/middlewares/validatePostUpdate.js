const { postService } = require('../services');

const isBodyValid = (title, content) => title && content;

const validatePostUpdate = async (req, res, next) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const postToEdit = await postService.getById(id);

  if (!postToEdit) return res.status(404).json({ message: 'Post does not exist' });

  if (postToEdit.userId !== req.user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  if (!isBodyValid(title, content)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  req.postUpdateData = { title, content, updated: Date.now() };

  next();
};

module.exports = validatePostUpdate;