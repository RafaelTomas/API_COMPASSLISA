const ReserveRepository = require('../repositorys/ReserveRepository');

class ReserveService {
  async create(payload) {
    const data = await ReserveRepository.create(payload);
    return data;
  }

  async find(payload) {
    const data = await ReserveRepository.findall(payload);
    return data;
  }

  async findById(id) {
    return ReserveRepository.findId(id);
  }

  async delete(id) {
    return ReserveRepository.delete(id);
  }

  async update(id) {
    const data = await ReserveRepository.update(id);
    return data;
  }
}

module.exports = new ReserveService();
