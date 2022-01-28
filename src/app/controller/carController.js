const carService = require('../service/carService');
const notFound = require('../../erros/notFound');

class carController {

  async create(req, res) {
    try {
      const data = await carService.create(req.body);
      return res.status(201).json({
        'veiculos': {
          '_id': data._id,
          'modelo': data.modelo,
          'cor': data.cor,
          'ano': data.ano,
          'acessorios': data.acessorios,
          'quantidadePassageiros': data.quantidadePassageiros
        }
      });
    } catch (error) {
      return res.status(carService.errorCodes(error)).json({
        'message': 'bad request',
        'details': [
          {
            'message': error.message,
          }
        ]
      });
    }
  }

  async find(req, res) {
    try {
      const model = req.query.modelo;
      const colors = req.query.cor;
      const year= req.query.ano;
      const acessories= req.query.acessorios;
      const numberPassengers= req.query.quantidadePassageiros;
      const data = await carService.find(model,colors,year,acessories,numberPassengers);
      return res.status(200).json({
        'cars': data
      });
    } catch (error) {
      return res.status(carService.errorCodes(error)).json({
        'message': 'bad request',
        'details': [
          {
            'message': error.message,
          }
        ]
      });

    }
  }

  async findById(req, res) {
    const id = req.params._id;
    try {
      const car = await carService.findById(id);
      return res.status(200).json(car);
    } catch (error) {     
      return res.status(carService.errorCodes(error)).json({
        'message': 'bad request',
        'details': [
          {
            'message': error.message,
          }
        ]
      });
    }
  }

  async delete(req, res) {
    const carId = req.params._id;
    try {
      const car = await carService.findById(carId);
      if (car === null) {
        throw new notFound(`ID: ${carId}`);
      }
      await carService.delete(carId);
      res.status(204).end();
    } catch (error) {
      return res.status(carService.errorCodes(error)).json({
        'message': 'bad request',
        'details': [
          {
            'message': error.message,
          }
        ]
      });
    }
  }

  async update(req, res) {
    const carId = req.params._id;
    const newData = req.body;
    try {
      const car = await carService.findId(carId);
      if (car === null) {
        throw new notFound(`ID: ${carId}`);
      }
      const updatedcar = await carService.update(carId, newData);
      res.status(200).json(updatedcar);
    } catch (error) {
      return res.status(carService.errorCodes(error)).json({
        'message': 'bad request',
        'details': [
          {
            'message': error.message,
          }
        ]
      });
    }
  }

}

module.exports = new carController;