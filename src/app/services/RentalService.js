const RentalRepository = require('../repositorys/RentalRepository');
const ViaCep = require('../repositorys/viaCepRepository');
const NotFound = require('../errors/NotFound');
const InvalidBody = require('../errors/InvalidBody');

class RentalService {
  async create(payload, data) {
    for (let i = 0; i < payload.endereco.length; i++) {
      const ceps = payload.endereco;
      const result = ceps[i];
      const data = await ViaCep.find(result.cep);
      const {
        cep, logradouro, complemento, bairro, localidade, uf,
      } = data;
      result.cep = cep;
      result.logradouro = logradouro;
      result.complemento = complemento;
      result.bairro = bairro;
      result.localidade = localidade;
      result.uf = uf;
    }

    const result = await RentalRepository.create(payload, data);

    return result;
  }

  async find(payload) {
    const data = await RentalRepository.findall(payload);
    return data;
  }

  async findById(id) {
    const data = await RentalRepository.findId(id);
    return data;
  }

  async delete(id) {
    const data = await RentalRepository.delete(id);
    return data;
  }

  async update(id) {
    const data = await RentalRepository.update(id);
    return data;
  }

  errorCodes(erro) {
    let status = 500;
    if (erro instanceof NotFound) {
      status = 404;
    }
    if (erro instanceof InvalidBody) {
      status = 400;
    }

    return status;
  }
}

module.exports = new RentalService();
