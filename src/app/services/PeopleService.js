const PeopleRepository = require('../repositorys/PeopleRepository');

class PeopleService {
  async create(payload) {
    const data = await PeopleRepository.create(payload);
    return data;
  }

  async find(payload) {
    const data = await PeopleRepository.findall(payload);
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


}

module.exports = new PeopleService();
