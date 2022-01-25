const carSchema = require('../schemas/carSchemas');

class carRepository {
  async create(payload) {
    return carSchema.create(payload);
  }

  async findall() {
    return carSchema.find();
  }

  async find(payload) {
    return carSchema.find(payload, '-_id car_id name cpf office birthday situation');
  }

  async update(id, payload) {
    await carSchema.updateOne({ car_id: id }, payload);
    return carSchema.findOne({ car_id: id }, '-_id car_id name cpf office birthday situation');
  }

  async delete(id) {
    return carSchema.deleteOne({ car_id: id });
  }

  async findId(id) {
    return carSchema.findOne({ car_id: id });
  }
}
module.exports = new carRepository();