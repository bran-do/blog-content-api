const jwt = require('jsonwebtoken');
const { userService } = require('../services');

function getTokenFromBearer(bearerToken) {
  return bearerToken.split(' ')[1];
}

const validateJWTToken = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  
  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  const jwtToken = getTokenFromBearer(bearerToken);
  try {
    const jwtSecret = process.env.JWT_SECRET;
    const decodedToken = jwt.verify(jwtToken, jwtSecret);
    const user = await userService.getByEmail(decodedToken.data);

    if (!user) {
      return res.status(401).json({ message: 'Token references to no user' });
    }

    req.user = user;
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = validateJWTToken;