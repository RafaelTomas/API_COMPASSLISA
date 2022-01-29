const carRepository = require('../repository/carRepository');
const notFound = require('../../erros/notFound.js');
const invalidBody = require('../../erros/invalidBody');

class carService {

  async create(payload) {
    const data = await carRepository.create(payload);
    return data;
    
  }

  async find(modelo) {
    let data = {};
    if (typeof modelo === 'undefined') {
      data = await carRepository.findall();
    } else {
      const obj = Object.assign({});
      data = await carRepository.find(obj);
    }
    return data;
  }

  async findById(id) {
    return carRepository.findId(id);
  }

  async delete(id) {
    return carRepository.delete(id);
  }

  async update(id, payload) {
    const data = await carRepository.update(id, payload);
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