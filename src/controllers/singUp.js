const { userService } = require('../services');
const generateJWTToken = require('../utils/generateJWTToken');

const signUp = async (req, res) => {
  try {
    await userService.createUser(req.body);

    const { email } = req.body;
    const token = generateJWTToken(email);

    res.status(201).json({ token });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Something went wrong', error: e });
  }
};

module.exports = signUp;