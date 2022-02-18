const jwt = require('jsonwebtoken');
require('dotenv').config();

function tokenBearer(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split('')[1];
  if (!token) return res.send(401);
  jwt.verify(token, process.env.AUTH_SECRET, (err) => { if (err) return res.sendStatus(403) })
  next();
};
module.exports = tokenBearer;
