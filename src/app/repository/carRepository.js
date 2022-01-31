const carSchema = require('../schemas/carSchemas');

class carRepository {
  
  async create(payload) {
    return carSchema.create(payload);
  }

  async findall() {
    return carSchema.find();
  }

  async findId(id) {
    return carSchema.findOne(id);
  }

  async delete(id) {
    return carSchema.deleteOne(id);
  }

  async update(id) {
    return carSchema.updateOne(id);
  }
  
}
module.exports = new carRepository();