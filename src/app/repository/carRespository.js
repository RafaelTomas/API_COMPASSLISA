const carSchema = require('../schemas/carSchemas');

class carRepository {
  async create(payload) {
    return carSchema.create(payload);
  }

  async findall() {
    return carSchema.find();
  }

  async find(payload) {
    return carSchema.find(payload,'_id modelo cor ano acessorios quantidadePassageiros');
  }
  async findId(id) {
    return carSchema.findOne({ _id: id });
  }

  
}
module.exports = new carRepository();