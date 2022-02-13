const viaCepRepository = require('../repositorys/viaCepRepository');

const viaCep = async (payload) => {
  for (let i = 0; i < payload.endereco.length; i++) {
    const info = payload.endereco[i];
    const res = viaCepRepository.viaCep(info);
    const { cep, logradouro, complemento, bairro, localidade, uf } = res;
    info.cep = cep;
    info.logradouro = logradouro;
    info.complemento = complemento;
    info.bairro = bairro;
    info.localidade = localidade;
    info.uf = uf;
  };
};
module.exports = viaCep;