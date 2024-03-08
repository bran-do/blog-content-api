function getTokenFromBearer(bearerToken) {
  return bearerToken.split(' ')[1];
}

module.exports = getTokenFromBearer;