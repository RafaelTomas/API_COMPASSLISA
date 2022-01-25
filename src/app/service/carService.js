const carRepository = require('../repository/carRespository');
const NotFound = require('../../erros/notFound.js');
const InvalidBody = require('../../erros/InvalidBody');

class carService {
  async create(payload) {
    const data = await carRepository.create(payload);
    
    return data;
  }

//   async find(modelo) {
//     let data = {};
//     if (typeof modelo === 'undefined') {
//       data = await carRepository.findall();
//     } else {
//       const ObjModelo = this.validateModelo(modelo);
//       const obj = Object.assign({}, ObjModelo);
//       data = await carRepository.find(obj);
//     }
//     const newData = data.map(modelo);

//     if(newData.length === 0){
//       throw new NotFound('car');
//     }

//     return newData;
//   }

//   validateModelo(modelo) {
//     if (typeof modelo === 'undefined') {
//       const ObjModelo = {};
//       return ObjModelo;
//     } else {
//       const ObjModelo2 = { Modelo: { $regex: '.*' + modelo + '.*' } };
//       return ObjModelo2;
//     }
//   }

//   async update(id, payload) {
//     const data = await carRepository.update(id, payload);
  
//     return data;
//   }

//   async delete(id) {
//     return carRepository.delete(id);
//   }

//   async findId(id) {
//     return carRepository.findId(id);
//   }

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