const validateNewCategory = (req, res, next) => {
  const newCategory = req.body;

  if (!newCategory.name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  next();
};

module.exports = validateNewCategory;