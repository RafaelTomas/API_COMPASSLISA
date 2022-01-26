const peopleSchema = require('../schemas/peopleSchemas');

class peopleRepository {
  
  async create(payload) {
    return peopleSchema.create(payload);
  }

  async findall() {
    return peopleSchema.find();
  }

  async find(payload) {
    return peopleSchema.find(payload,'_id nome cpf data_nascimento email senha habilitado');
  }
 
  async findId(id) {
    return peopleSchema.findOne({ _id: id });
  }

  async delete(id) {
    return peopleSchema.deleteOne({ _id: id });
  }

  async update(id, payload) {
    await peopleSchema.updateOne({ _id: id }, payload);
    return peopleSchema.findOne({ _id: id }, '_id nome cpf data_nascimento email senha habilitado');
  }
  
}
module.exports = new peopleRepository();