const carRepository = require('../repository/carRepository');
const NotFound = require('../../erros/notFound.js');
const InvalidBody = require('../../erros/InvalidBody');

class carService {
  async create(payload) {
    const Cpfvalidate = await carRepository.find({cpf:payload.cpf});
    if(Cpfvalidate.length > 0){
      throw new Error('Cpf already exists');
    }
    const data = await carRepository.create(payload);
    const car = this.formatCPF(data);
    return car;
  }

  async find(names, offices) {
    let data = {};
    if (typeof names === 'undefined' && offices === 'undefined') {
      data = await carRepository.findall();
    } else {

      const ObjName = this.validateName(names);
      const ObjOffice = this.validateOffice(offices);
      const obj = Object.assign({}, ObjName, ObjOffice);
      data = await carRepository.find(obj);
    }
    const newData = data.map(car => this.formatCPF(car));

    if(newData.length === 0){
      throw new NotFound('car');
    }

    return newData;
  }
  validateOffice(offices) {
    if (typeof offices === 'undefined') {
      const ObjOffice = {};
      return ObjOffice;
    } else {
      const ObjOffice2 = { office: offices };
      return ObjOffice2;
    }

  }
  validateName(names) {
    if (typeof names === 'undefined') {
      const ObjName = {};
      return ObjName;
    } else {
      const ObjName2 = { name: { $regex: '.*' + names + '.*' } };
      return ObjName2;
    }
  }

  async update(id, payload) {
    const data = await carRepository.update(id, payload);
    const car = this.formatCPF(data);
    return car;
  }

  async delete(id) {
    return carRepository.delete(id);
  }

  async findId(id) {
    return carRepository.findId(id);
  }

  formatCPF(data) {
    const cpf = data.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    const car = Object.assign(data, { cpf: cpf });
    return car;
  }

  errorCodes(erro){
    let status = 500;
    if(erro instanceof NotFound){
      status = 404;
    }
    if(erro instanceof InvalidBody){
      status = 400;
    }
  
    return status;
    
  }
}

module.exports = new carService();