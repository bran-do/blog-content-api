const { User } = require('../models');

const getAll = () => User.findAll();

const getById = (id) => User.findByPk(id);

const getByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  getAll,
  getById,
  getByEmail,
};