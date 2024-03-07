const { userService } = require('../services');

const getUsers = async (_req, res) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', error: e });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Something went wrong', error: e });
  }
};

module.exports = {
  getUsers,
  getUserById,
};