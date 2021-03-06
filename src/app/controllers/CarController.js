const CarService = require('../services/CarService');
const NotFound = require('../errors/NotFound');
const errorCodes = require('../utils/errorCodes');

class CarController {
  async create(req, res) {
    const payload = req.body;
    try {
      const data = await CarService.create(payload);
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
      return res.status(errorCodes(error)).json({
        details: [
          {
            description: 'bad request',
            name: error.message,
          },
        ],

      });
    }
  }

  async find(req, res) {
    const payload = req.query;
    try {
      const data = await CarService.find(payload);
      return res.status(200).json({
        cars: data,
      });
    } catch (error) {
      return res.status(errorCodes(error)).json({
        details: [
          {
            description: 'bad request',
            name: error.message,
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
      return res.status(errorCodes(error)).json({
        details: [
          {
            description: 'bad request',
            name: error.message,
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
      return res.status(errorCodes(error)).json({
        details: [
          {
            description: 'bad request',
            name: error.message,
          },
        ],
      });
    }
  }

  async update(req, res) {
    const carId = req.params.id;
    const newData = req.payload;
    try {
      const car = await CarService.findById(carId);
      if (!car) {
        throw new NotFound(`ID: ${carId}`);
      }
      const updatedcar = await CarService.update(carId, newData);
      res.status(200).json(updatedcar);
    } catch (error) {
      return res.status(errorCodes(error)).json({
        details: [
          {
            description: 'bad request',
            name: error.message,
          },
        ],
      });
    }
  }

  async updateOne(req, res) {
    const { id, acessorio_id } = req.params;
    const payload = req.body;
    try {
      const updateItem = await CarService.updateitem(id, acessorio_id, payload);
      res.status(200).json(updateItem);
    } catch (error) {
      return res.status(errorCodes(error)).json({
        details: [
          {
            description: 'bad request',
            name: error.message,
          },
        ],
      });
    }
  }
}

module.exports = new CarController();
