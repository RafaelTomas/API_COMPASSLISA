const RentalRepository = require('../repositorys/RentalRepository');
const ViaCep = require('../repositorys/ViaCep/viaCepRepository');
const NotFound = require('../errors/NotFound');
const InvalidBody = require('../errors/InvalidBody');

class RentalService {
  async create(payload) {
    for (let i = 0; i < payload.endereco.length; i++) {
      const infos = payload.endereco;
      const result = infos[i];
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

    const data = await RentalRepository.create(payload);

    return data;
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
}

module.exports = new RentalService();
