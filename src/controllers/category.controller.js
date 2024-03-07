const { categoryService } = require('../services');

const getCategories = async (_req, res) => {
  try {
    const categories = await categoryService.getAll();
    res.status(200).json(categories);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', error: e });
  }
};

const createCategory = async (req, res) => {
  try {
    const newCategory = req.body;

    if (!newCategory.name) return res.status(400).json({ message: '"name" is required' });

    await categoryService.create(newCategory);
    const newCategoryOnDb = await categoryService.getByName(newCategory.name);

    res.status(201).json(newCategoryOnDb);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', error: e });
  }
};

module.exports = {
  getCategories,
  createCategory,
};