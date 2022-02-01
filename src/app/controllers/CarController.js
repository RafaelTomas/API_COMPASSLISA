const CarService = require('../services/CarService');
const NotFound = require('../errors/NotFound');

class carController {

  async create(req, res) {
    try {
      const data = await CarService.create(req.body);
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
      return res.status(CarService.errorCodes(error)).json({
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
      const data = await CarService.find(model,colors,year,acessories,numberPassengers);
      return res.status(200).json({
        'cars': data
      });
    } catch (error) {
      return res.status(CarService.errorCodes(error)).json({
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
      const car = await CarService.findById(id);
      return res.status(200).json(car);
    } catch (error) {     
      return res.status(CarService.errorCodes(error)).json({
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
      const car = await CarService.findById(carId);
      if (car === null) {
        throw new NotFound(`ID: ${carId}`);
      }
      await CarService.delete(carId);
      res.status(204).end();
    } catch (error) {
      return res.status(CarService.errorCodes(error)).json({
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
      const car = await CarService.findId(carId);
      if (car === null) {
        throw new NotFound(`ID: ${carId}`);
      }
      const updatedcar = await CarService.update(carId, newData);
      res.status(200).json(updatedcar);
    } catch (error) {
      return res.status(CarService.errorCodes(error)).json({
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