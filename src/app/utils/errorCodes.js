const InvalidBody = require('../errors/InvalidBody');
const NotFound = require('../errors/NotFound');

function errorCodes(erro) {
  let status = 500;
  if (erro instanceof NotFound) {
    status = 404;
  };
  if (erro instanceof InvalidBody) {
    status = 400;
  };
  return status;
}

module.exports = errorCodes();