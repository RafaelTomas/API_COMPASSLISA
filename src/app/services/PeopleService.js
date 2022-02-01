const PeopleRepository = require('../repositorys/PeopleRepository');
const InvalidBody = require('../errors/InvalidBody');
const NotFound = require('../errors/NotFound');


class PeopleService {

  async create(payload) {
    const data = await PeopleRepository.create(payload);
    return data;
  }

  async find(payload) {
    let data = await PeopleRepository.findall(payload);
    return data;
  }
  
  async findById(id) {
    return PeopleRepository.findId(id);
  }
  
  async delete(id) {
    return PeopleRepository.delete(id);
  }

  async update(id) {
    const data = await PeopleRepository.update(id);
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

module.exports = new PeopleService();