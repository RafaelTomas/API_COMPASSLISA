const bcrypt = require('bcryptjs');
const Authenticate = require('../repositorys/Authenticate');
const generateToken = require('../helpers/generateToken');

class AuthenticateService {
  async find(payload) {
    const { senha } = payload;
    const people = await Authenticate.find(payload.email);
    if (!(await bcrypt.compare(senha, people.senha)));
    const { email, habilitado } = people;
    const token = generateToken({ id: people.id });
    const data = { email, habilitado, token };
    return data;
  }
}

module.exports = new AuthenticateService();
