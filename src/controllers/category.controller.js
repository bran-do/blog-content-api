const { categoryService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const categories = await categoryService.getAll();
    res.status(200).json(categories);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', error: e });
  }
};

const create = async (req, res) => {
  try {
    const newCategory = req.body;
    const insertedCategory = await categoryService.create(newCategory);
    res.status(201).json(insertedCategory);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', error: e });
  }
};

module.exports = {
  getAll,
  create,
};