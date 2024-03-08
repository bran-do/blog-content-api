const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const getTokenFromBearer = require('../utils/getTokenFromBearer');

const validateJWTToken = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  
  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  const jwtToken = getTokenFromBearer(bearerToken);
  try {
    const jwtSecret = process.env.JWT_SECRET;
    const decodedToken = jwt.verify(jwtToken, jwtSecret);
    const user = await userService.getById(decodedToken.userId);

    if (!user) {
      return res.status(401).json({ message: 'Token references to no user' });
    }

    req.user = user;
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = validateJWTToken;