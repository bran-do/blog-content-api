const { User } = require('../models');

const getAll = () => User.findAll({
  attributes: { exclude: 'password' },
});

const getById = (id) => User.findByPk(id);

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = (user) => User.create(user);

module.exports = {
  getAll,
  getById,
  getByEmail,
  createUser,
};