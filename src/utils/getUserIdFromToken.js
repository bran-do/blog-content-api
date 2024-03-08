const jwt = require('jsonwebtoken');
const getTokenFromBearer = require('./getTokenFromBearer');

const getUserIdFromToken = (bearerToken) => {
  try {
    const jwtToken = getTokenFromBearer(bearerToken);
    const jwtSecret = process.env.JWT_SECRET;
  
    const decodedToken = jwt.verify(jwtToken, jwtSecret);
    const { userId } = decodedToken;
  
    return userId;
  } catch (e) {
    console.log(e);
  }
};

module.exports = getUserIdFromToken;