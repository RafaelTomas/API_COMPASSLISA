const carRepository = require('../repository/carRepository');
const NotFound = require('../../erros/notFound.js');
const InvalidBody = require('../../erros/InvalidBody');

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
      const ObjModelo = this.validateModelo(modelo);
      const obj = Object.assign({}, ObjModelo);
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

  validateModelo(modelo) {
    if (typeof modelo === 'undefined') {
      const ObjModelo = {};
      return ObjModelo;
    } else {
      const ObjModelo2 = { Modelo: { $regex: '.*' + modelo + '.*' } };
      return ObjModelo2;
    }
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

module.exports = new carService();