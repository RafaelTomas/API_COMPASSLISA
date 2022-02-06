const peopleSchema = require('../schemas/peopleSchemas');

class AuthenticateRepository {
  async find(payload) {
    const data = await peopleSchema.findOne(payload).select('+senha');
    return data;
  }
}

module.exports = new AuthenticateRepository();
