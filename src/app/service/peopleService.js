const peopleRepository = require('../repository/peopleRepository');
const notFound = require('../../erros/notFound.js');
const invalidBody = require('../../erros/invalidBody');

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
      const Objnome = this.validatenome(nome);
      const obj = Object.assign({}, Objnome);
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

  validatenome(nome) {
    if (typeof nome === 'undefined') {
      const Objnome = {};
      return Objnome;
    } else {
      const Objnome2 = { nome: { $regex: '.*' + nome + '.*' } };
      return Objnome2;
    }
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