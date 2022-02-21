const RentalSchema = require('../schemas/rentalSchema');

class RentalRepository {
  async create(payload) {
    return RentalSchema.create(payload);
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
    return RentalSchema.paginate(payload, options, {});
  }

  async findId(id) {
    return RentalSchema.findOne(id);
  }

  async delete(id) {
    return RentalSchema.findByIdAndDelete(id);
  }

  async update(id) {
    return RentalSchema.findByIdAndUpdate(id);
  }
}
module.exports = new RentalRepository();
