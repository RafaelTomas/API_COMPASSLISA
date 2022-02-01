const peopleSchema = require('../schemas/peopleSchemas');

class PeopleRepository {
  
  async create(payload) {
    return peopleSchema.create(payload);
  }

  async findall(payload) {
    const myCustomLabels = {
      totalDocs: 'total',
      docs: 'Pessoas',
      page: 'offset',
      nextPage: false,
      prevPage: false,
      totalPages: 'offsets',
      pagingCounter: false,
      meta: false,
      hasPrevPage: false,
      hasNextPage: false
    };
    const options = {
      page: 1,
      limit: 100,
      customLabels: myCustomLabels
    };
    return peopleSchema.paginate(payload, options, {});
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
module.exports = new PeopleRepository();