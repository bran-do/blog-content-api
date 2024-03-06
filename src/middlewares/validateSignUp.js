const { userService } = require('../services');

const validateSignUp = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  // displayName length:
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  // email format:
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!(email.match(emailRegex))) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  // password length:
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  // Already registered email
  const foundEmail = await userService.getByEmail(email);
  if (foundEmail) return res.status(409).json({ message: 'User already registered' });

  next();
};

module.exports = validateSignUp;