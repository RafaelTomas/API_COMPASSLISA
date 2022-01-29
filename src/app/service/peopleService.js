const peopleRepository = require('../repository/peopleRepository');
const invalidBody = require('../../erros/invalidBody');
const notFound = require('../../erros/notFound');


class peopleService {

  async create(payload) {
    const data = await peopleRepository.create(payload);
    return data;
  }

  async find(nome) {
    let data = {};
    if (typeof nome === 'undefined') {
      data = await peopleRepository.findall();
    } else {
      const obj = Object.assign({});
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

module.exports = new peopleService();