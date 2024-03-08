const jwt = require('jsonwebtoken');

const generateJWTToken = (userId) => {
  const jwtSecret = process.env.JWT_SECRET;
  const jwtConfig = { algorithm: 'HS256' };

  const token = jwt.sign({ userId }, jwtSecret, jwtConfig);

  return token;
};

module.exports = generateJWTToken;
