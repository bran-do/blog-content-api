const { userService } = require('../services');

const isBodyValid = (email, password) => email && password;

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!isBodyValid(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await userService.getByEmail(email);

  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  req.loggedUser = user;

  next();
};

module.exports = validateLogin;