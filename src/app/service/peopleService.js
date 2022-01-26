const peopleRepository = require('../repository/peopleRepository');
const NotFound = require('../../erros/notFound.js');
const InvalidBody = require('../../erros/InvalidBody');

class peopleService {

  async create(payload) {
    const data = await peopleRepository.create(payload);
    return data;
  }

  async find(modelo) {
    let data = {};
    if (typeof modelo === 'undefined') {
      data = await peopleRepository.findall();
    } else {
      const ObjModelo = this.validateModelo(modelo);
      const obj = Object.assign({}, ObjModelo);
      data = await peopleRepository.find(obj);
    }
    return data;
  }
  
  async findById(id) {
    return peopleRepository.findId(id);
  }
  
  async delete(id) {
    return peopleRepository.delete(id);
  }

  async update(id, payload) {
    const data = await peopleRepository.update(id, payload);
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

module.exports = new peopleService();