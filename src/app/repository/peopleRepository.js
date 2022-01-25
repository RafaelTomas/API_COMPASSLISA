const peopleSchema = require('../schemas/peopleSchemas');

class peopleRepository {
  
  async create(payload) {
    return peopleSchema.create(payload);
  }

  async findall() {
    return peopleSchema.find();
  }

  async find(payload) {
    return peopleSchema.find(payload,'_id modelo cor ano acessorios quantidadePassageiros');
  }
 
  async findId(id) {
    return peopleSchema.findOne({ _id: id });
  }

  async delete(id) {
    return peopleSchema.deleteOne({ _id: id });
  }

  async update(id, payload) {
    await peopleSchema.updateOne({ _id: id }, payload);
    return peopleSchema.findOne({ _id: id }, '_id modelo cor ano acessorios quantidadePassageiros');
  }
  
}
module.exports = new peopleRepository();