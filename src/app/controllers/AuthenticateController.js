const authenticate = require('../services/AuthenticateService');
const bcrypt = require('bcryptjs');
const generateToken = require('../helpers/generateToken');

class AuthenticateController {
  async authenticate (req, res) {
    const { email, senha } = req.body;
    const user = await authenticate.find({email});
  
    if (!user) {
      return res.status(400).json({ error: 'usuario não encontrado' });
    }
    if (!await bcrypt.compareSync(senha, user.senha)) {
      return res.status(400).json({ error: 'Senha invalida' });
    }
   
    user.senha = undefined;

    res.send({user,token: generateToken({ id: user.id })});
  }
}

module.exports = new AuthenticateController();