const { postService, postCategoryService } = require('../services');

const getAll = async (req, res) => {
  try {
    const posts = await postService.getAll();
    return res.status(200).json(posts);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', error: e });
  }
};

const create = async (req, res) => {
  try {
    const { title, content, categoryIds, userId, published, updated } = req.newPostData;

    const newPost = await postService.create(
      { title, content, userId, published, updated },
    );

    const newPostCategories = categoryIds.map((id) => (
      postCategoryService.create({ postId: newPost.id, categoryId: id })
    ));

    await Promise.all(newPostCategories);

    res.status(201).json(newPost);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', error: e });
  }
};

module.exports = {
  getAll,
  create,
};