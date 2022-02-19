const RentalService = require('../services/RentalService');
const NotFound = require('../errors/NotFound');
const errorCodes = require('../utils/errorCodes');


class RentalController {
  async create(req, res) {
    const payload = req.body;
    try {
      const result = await RentalService.create(payload);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({
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
      const data = await RentalService.find(payload);
      return res.status(200).json({
        Locadoras: data,
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
      const Rental = await RentalService.findById(id);
      return res.status(200).json(Rental);
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
    const RentalId = req.params.id;
    try {
      const rental = await RentalService.findById(RentalId);
      if (!rental) {
        throw new NotFound(`ID: ${RentalId}`);
      }
      await RentalService.delete(RentalId);
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
    const RentalId = req.params.id;
    const newData = req.body;
    try {
      const rental = await RentalService.findById(RentalId);
      if (!rental) {
        throw new NotFound(`ID: ${RentalId}`);
      }
      const updatedRental = await RentalService.update(RentalId, newData);
      res.status(200).json(updatedRental);
    } catch (error) {
      return res.status(RentalService.errorCodes(error)).json({
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

module.exports = new RentalController();
