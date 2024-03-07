const { Category } = require('../models');

const getAll = () => Category.findAll();

const getById = (id) => Category.findByPk(id);

const getByName = (name) => Category.findOne({ where: { name } });

const create = (category) => Category.create(category);

module.exports = {
  getAll,
  getById,
  getByName,
  create,
};