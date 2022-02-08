const carSchema = require('../schemas/carSchemas');

class CarRepository {
  async create(payload) {
    return carSchema.create(payload);
  }

  async findall(payload) {
    const myCustomLabels = {
      totalDocs: 'total',
      docs: 'Veiculos',
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
    return carSchema.paginate(payload, options, {});
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
module.exports = new CarRepository();
