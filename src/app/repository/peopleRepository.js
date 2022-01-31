const peopleSchema = require('../schemas/peopleSchemas');

class peopleRepository {
  
  async create(payload) {
    return peopleSchema.create(payload);
  }

  async findall() {
    return peopleSchema.find();
  }
 
  async findId(id) {
    return peopleSchema.findOne(id);
  }

  async delete(id) {
    return peopleSchema.deleteOne(id);
  }

  async update(id) {
    return peopleSchema.updateOne(id);
  }
  
}
module.exports = new peopleRepository();