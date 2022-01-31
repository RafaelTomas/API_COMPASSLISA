const peopleRepository = require('../repository/peopleRepository');
const invalidBody = require('../../erros/invalidBody');
const notFound = require('../../erros/notFound');


class peopleService {

  async create(payload) {
    const data = await peopleRepository.create(payload);
    return data;
  }

  async find() {
    let data = await peopleRepository.findall();
    return data;
  }
  
  async findById(id) {
    return peopleRepository.findId(id);
  }
  
  async delete(id) {
    return peopleRepository.delete(id);
  }

  async update(id) {
    const data = await peopleRepository.update(id);
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