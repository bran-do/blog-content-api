const { User } = require('../models');

const noPassword = { exclude: 'password' };

const getAll = () => User.findAll({ attributes: noPassword });

const getById = (id) => User.findOne({ where: { id }, attributes: noPassword });

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = (user) => User.create(user);

module.exports = {
  getAll,
  getById,
  getByEmail,
  createUser,
};