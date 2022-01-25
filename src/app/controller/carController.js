const carService = require('../service/carService');
//const NotFound = require('../../erros/NotFound');

class carController {
  async create(req, res) {
    try {
      const data = await carService.create(req.body);
      return res.status(201).json({
        'veiculos':{  
          'car_id': data.car_id,
          'modelo':data.modelo,
          'cor':data.cor,
          'ano':data.ano,
          'acessorios':data.acessorios,
          'quantidadePassageiros':data.quantidadePassageiros
        }});
    } catch (error) {
      return res.status(carService.errorCodes(error)).json({
        'message': 'bad request',
        'details':[
          {
            'message':error.message,
          }
        ]
      });
    }
  }

  // async find(req,res){
  //   try{
  //     const modelo1 = req.query.modelo;
  //     const data = await  carService.find(modelo1);
  //     return res.status(200).json({
  //       'cars': data
  //     });
  //   }catch(error){
  //     return res.status(carService.errorCodes(error)).json({
  //       'message': 'bad request',
  //       'details':[
  //         {
  //           'message':error.message,
  //         }
  //       ]
  //     });

  //   }
  // }

  // async update(req, res) {
  //   const carId = req.params.car_id;
  //   const newData = req.body;
  //   try {
  //     const car = await carService.findId(carId);
  //     if(car === null) {
  //       throw new NotFound(`ID: ${carId}`);
  //     }
  //     const updatedcar = await carService.update(carId, newData);
  //     res.status(200).json(updatedcar);
  //   } catch (error) {
  //     return res.status(carService.errorCodes(error)).json({
  //       'message': 'bad request',
  //       'details':[
  //         {
  //           'message':error.message,
  //         }
  //       ]
  //     });
  //   }
  // }

  // async delete(req, res) {
  //   const carId = req.params.car_id;
  //   try{

  //     const car = await carService.findId(carId);
  //     if(car === null) {
  //       throw new NotFound(`ID: ${carId}`);
  //     }
  //     await carService.delete(carId);
  //     res.status(204).end();
  //   } catch (error) {
  //     return res.status(carService.errorCodes(error)).json({
  //       'message': 'bad request',
  //       'details':[
  //         {
  //           'message':error.message,
  //         }
  //       ]
  //     });
  //   }
  // }
}

module.exports = new carController;