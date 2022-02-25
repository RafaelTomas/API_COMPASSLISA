const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(email, habilitado = {}) {
  return jwt.sign({ email, habilitado }, process.env.AUTH_SECRET, {
    expiresIn: 86400,
  });
}

module.exports = generateToken;
