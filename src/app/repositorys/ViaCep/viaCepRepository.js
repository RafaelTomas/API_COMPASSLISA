const axios = require('axios');

class ViaCep {
  async find(cep) {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    return result.data;
  }
}
module.exports = new ViaCep();
