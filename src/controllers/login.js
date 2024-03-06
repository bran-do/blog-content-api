const { userService } = require('../services');
const generateJWTToken = require('../utils/generateJWTToken');

const isBodyValid = (email, password) => email && password;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await userService.getByEmail(email);

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = generateJWTToken(user.id);

    return res.status(200).json({ token });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Something went wrong', error: e });
  }
};

module.exports = login;