const { PostCategory } = require('../models');

const create = async (postCategory) => PostCategory.create(postCategory);

module.exports = {
  create,
};