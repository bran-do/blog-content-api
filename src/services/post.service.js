const { BlogPost, User, Category } = require('../models');

const postFormat = {
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
};

const getAll = () => BlogPost.findAll(postFormat);

const getByTitle = (title) => BlogPost.findOne({ where: { title } });

const create = async (post) => {
  const newPost = await BlogPost.create(post);
  return newPost;
};

module.exports = {
  getAll,
  getByTitle,
  create,
};