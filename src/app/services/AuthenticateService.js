const Authenticate = require('../repositorys/Authenticate');

class AuthenticateService {
  async find(payload) {
    const data = await Authenticate.find(payload);
    return data;
  }
}

module.exports = new AuthenticateService();
