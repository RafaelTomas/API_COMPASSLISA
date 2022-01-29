const peopleSchema = require('../schemas/peopleSchemas');

class peopleRepository {
  
  async create(payload) {
    return peopleSchema.create(payload);
  }

  async findall() {
    return peopleSchema.find();
  }
 
  async findId(id) {
    return peopleSchema.findOne({ _id: id });
  }

  async delete(id) {
    return peopleSchema.deleteOne({ _id: id });
  }

  async update(id) {
    return peopleSchema.updateOne({ _id: id });
  }
  
}
module.exports = new peopleRepository();