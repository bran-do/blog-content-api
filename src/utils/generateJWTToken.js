const jwt = require('jsonwebtoken');

const generateJWTToken = (userData) => {
  const jwtSecret = process.env.JWT_SECRET;
  const jwtConfig = { algorithm: 'HS256' };

  const token = jwt.sign({ data: userData }, jwtSecret, jwtConfig);

  return token;
};

module.exports = generateJWTToken;
