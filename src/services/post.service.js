const { BlogPost, User, Category } = require('../models');

const postFormat = {
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
};

const getAll = () => BlogPost.findAll(postFormat);

const getById = (id) => BlogPost.findOne({ where: { id }, include: postFormat.include });

const getByTitle = (title) => BlogPost.findOne({ where: { title } });

const create = async (post) => {
  const newPost = await BlogPost.create(post);
  return newPost;
};

const update = async (updateData, id) => BlogPost.update(updateData, { where: { id } });

module.exports = {
  getAll,
  getById,
  getByTitle,
  create,
  update,
};