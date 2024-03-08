const generateJWTToken = require('../utils/generateJWTToken');

const login = async (req, res) => {
  try {
    const { email } = req.loggedUser;
    const token = generateJWTToken(email);
    
    return res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Something went wrong', error: e });
  }
};

module.exports = login;