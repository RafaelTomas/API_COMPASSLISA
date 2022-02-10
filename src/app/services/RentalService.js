const RentalRepository = require('../repositorys/RentalRepository');
const NotFound = require('../errors/NotFound');
const InvalidBody = require('../errors/InvalidBody');

class RentalService {
  async create(payload) {
    const data = await RentalRepository.create(payload);
    return data;
  }

  async find(payload) {
    const data = await RentalRepository.findall(payload);
    console.log(payload);
    return data;
  }

  async findById(id) {
    const data = await RentalRepository.findId(id);
    return data;
  }

  async delete(id) {
    const data = await RentalRepository.delete(id);
    return data;
  }

  async update(id) {
    const data = await RentalRepository.update(id);
    return data;
  }

  errorCodes(erro) {
    let status = 500;
    if (erro instanceof NotFound) {
      status = 404;
    }
    if (erro instanceof InvalidBody) {
      status = 400;
    }

    return status;
  }
}

module.exports = new RentalService();
