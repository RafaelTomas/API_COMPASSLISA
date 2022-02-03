const peopleSchema = require('../schemas/peopleSchemas');

class AuthenticateRepository {
  async find(authenticate) {
    const data = await peopleSchema.findOne(authenticate).select('+senha');
    return data;
  }
}

module.exports = new AuthenticateRepository();
