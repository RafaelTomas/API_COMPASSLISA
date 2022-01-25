const carService = require('../service/carService');

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
      const modelo1 = req.query.modelo;
      const data = await carService.find(modelo1);
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


}

module.exports = new carController;