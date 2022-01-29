const carSchema = require('../schemas/carSchemas');

class carRepository {
  
  async create(payload) {
    return carSchema.create(payload);
  }

  async findall() {
    return carSchema.find();
  }

  async findId(id) {
    return carSchema.findOne({ _id: id });
  }

  async delete(id) {
    return carSchema.deleteOne({ _id: id });
  }

  async update(id) {
    return carSchema.updateOne({ _id: id });
  }
  
}
module.exports = new carRepository();