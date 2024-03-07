const { userService } = require('../services');

const getUsers = async (_req, res) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', error: e });
  }
};

module.exports = getUsers;