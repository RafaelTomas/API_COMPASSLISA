const CarService = require('../services/CarService');
const NotFound = require('../errors/NotFound');

class CarController {
  async create(req, res) {
    try {
      const data = await CarService.create(req.body);
      return res.status(201).json({
        veiculos: {
          id: data.id,
          modelo: data.modelo,
          cor: data.cor,
          ano: data.ano,
          acessorios: data.acessorios,
          quantidadePassageiros: data.quantidadePassageiros,
        },
      });
    } catch (error) {
      return res.status(CarService.errorCodes(error)).json({
        details: [
          {
            description: error,
            message,
          },
        ],
      });
    }
  }

  async find(req, res) {
    try {
      const {
        modelo, cor, ano, acessorios, quantidadePassageiros,
      } = req.query;
      const data = await CarService.find(modelo, cor, ano, acessorios, quantidadePassageiros);
      return res.status(200).json({
        cars: data,
      });
    } catch (error) {
      return res.status(CarService.errorCodes(error)).json({
        message: 'bad request',
        details: [
          {
            message: error.message,
          },
        ],
      });
    }
  }

  async findById(req, res) {
    const { id } = req.params;
    try {
      const car = await CarService.findById(id);
      return res.status(200).json(car);
    } catch (error) {
      return res.status(CarService.errorCodes(error)).json({
        message: 'bad request',
        details: [
          {
            message: error.message,
          },
        ],
      });
    }
  }

  async delete(req, res) {
    const carId = req.params.id;
    try {
      const car = await CarService.findById(carId);
      if (!car) {
        throw new NotFound(`ID: ${carId}`);
      }
      await CarService.delete(carId);
      res.status(204).end();
    } catch (error) {
      return res.status(CarService.errorCodes(error)).json({
        message: 'bad request',
        details: [
          {
            message: error.message,
          },
        ],
      });
    }
  }

  async update(req, res) {
    const carId = req.params.id;
    const newData = req.body;
    try {
      const car = await CarService.findId(carId);
      if (!car) {
        throw new NotFound(`ID: ${carId}`);
      }
      const updatedcar = await CarService.update(carId, newData);
      res.status(200).json(updatedcar);
    } catch (error) {
      return res.status(CarService.errorCodes(error)).json({
        message: 'bad request',
        details: [
          {
            message: error.message,
          },
        ],
      });
    }
  }
}

module.exports = new CarController();
