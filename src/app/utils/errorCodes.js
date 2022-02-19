const InvalidBody = require('../errors/InvalidBody');
const NotFound = require('../errors/NotFound');

function errorCodes(error) {
  let status = 500;
  if (error instanceof NotFound) {
    status = 404;
  }
  if (error instanceof InvalidBody) {
    status = 400;
  }
  return status;
}

module.exports = errorCodes;
