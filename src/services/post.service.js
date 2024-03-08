const { BlogPost } = require('../models');

const getAll = () => BlogPost.findAll();

const getByTitle = (title) => BlogPost.findOne({ where: { title } });

const create = async ({ title, content, userId, published, updated }) => {
  const newPost = await BlogPost.create({ title, content, userId, published, updated });
  return newPost;
};

module.exports = {
  getAll,
  getByTitle,
  create,
};