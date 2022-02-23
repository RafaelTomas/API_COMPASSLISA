const ReserveSchema = require('../schemas/ReserveSchema');

class ReserveRepository {
  async create(payload) {
    return ReserveSchema.create(payload);
  }
  async findall(payload) {
    const myCustomLabels = {
      totalDocs: 'total',
      docs: 'Locadoras',
      page: 'offset',
      nextPage: false,
      prevPage: false,
      totalPages: 'offsets',
      pagingCounter: false,
      meta: false,
      hasPrevPage: false,
      hasNextPage: false,
    };
    const options = {
      page: 1,
      limit: 100,
      customLabels: myCustomLabels,
    };
   return ReserveSchema.paginate(payload, options, {});
  };

  async findId(id) {
    return ReserveSchema.findOne(id);
  };

  async delete(id) {
    return ReserveSchema.findByIdAndDelete(id);
  };
 
  async update(id, reserveId) {
    return ReserveSchema.findByIdAndUpdate(id, reserveId);
  }
};
module.exports = new ReserveRepository();
