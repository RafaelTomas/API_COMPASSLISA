const peopleSchema = require('../schemas/peopleSchemas');

class AuthenticateRepository {
  async find(email) {
    const data = await peopleSchema.findOne({ email });
    return data;
  }
}

module.exports = new AuthenticateRepository();
