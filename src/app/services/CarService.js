const CarRepository = require('../repositorys/CarRepository');

class CarService {
  async create(payload) {
    const data = await CarRepository.create(payload);
    return data;
  }

  async find(payload) {
    const data = await CarRepository.findall(payload);
    return data;
  }

  async findById(id) {
    const data = CarRepository.findId(id);
    return data;
  }

  async delete(id) {
    const data = CarRepository.delete(id);
    return data;
  }

  async update(id) {
    const data = await CarRepository.update(id);
    return data;
  }

  async updateitem(id, acessorio_id, payload) {
    const data = await CarRepository.updateItem(id, acessorio_id, payload);
    return data;
  }
}

module.exports = new CarService();
