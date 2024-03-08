const { categoryService } = require('../services');

const isBodyValid = (title, content, categoryIds) => title && content && categoryIds;

const areCategoryIdsValid = async (categoryIds) => {
  const categories = await categoryService.getAll();
  const existingIds = categories.map((category) => category.id);

  for (let i = 0; i < categoryIds.length; i += 1) {
    if (!existingIds.includes(categoryIds[i])) return false;
  }

  return true;
};

const insertDatetime = (userId, title, content, categoryIds) => ({
  userId,
  title,
  content,
  categoryIds,
  published: Date.now(),
  updated: Date.now(),
});

const validateNewPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;
  
  if (!isBodyValid(title, content, categoryIds)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  const validCategoryIds = await areCategoryIdsValid(categoryIds);
  if (!validCategoryIds) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  req.newPostData = insertDatetime(userId, title, content, categoryIds);

  next();
};

module.exports = validateNewPost;