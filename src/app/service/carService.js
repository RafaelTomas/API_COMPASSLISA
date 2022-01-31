const carRepository = require('../repository/carRepository');
const notFound = require('../../erros/notFound.js');
const invalidBody = require('../../erros/invalidBody');

class carService {

  async create(payload) {
    const data = await carRepository.create(payload);
    return data;

  }

  async find() {
    const data = await carRepository.findall();
    return data ;
  
  }

  async findById(id) {
    const data = carRepository.findId(id);
    return data;
  }

  async delete(id) {
    const data = carRepository.delete(id);
    return data;
  }

  async update(id) {
    const data = await carRepository.update(id);
    return data;
  }

  errorCodes(erro) {
    let status = 500;
    if (erro instanceof notFound) {
      status = 404;
    }
    if (erro instanceof invalidBody) {
      status = 400;
    }

    return status;

  }
}

module.exports = new carService();