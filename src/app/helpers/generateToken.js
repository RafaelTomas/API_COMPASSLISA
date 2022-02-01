const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken (params = {}) {
  return jwt.sign({ params }, process.env.AUTH_SECRET,
    {
      expiresIn: 86400
    });
}

module.exports = generateToken;