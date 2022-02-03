const Authenticate = require('../repositorys/Authenticate');

class AuthenticateService {
  async find(authenticate) {
    const data = await Authenticate.find(authenticate);
    return data;
  }
}

module.exports= new AuthenticateService();