const { path } = require('express/lib/application');
const RentalService = require('../services/RentalService');
const NotFound = require('../errors/NotFound');

class RentalController {
  async create(req, res) {
    try {
      const data = await RentalService.create(req.body);
      return res.status(201).json({
        Locadoras: {
          id: data.id,
          nome: data.nome,
          cnpj: data.cnpj,
          atividades: data.atividades,
          endereco: data.endereco,
        },
      });
    } catch (error) {
      return res.status(400).json({
        details: [
          {
            message: error.message,
          },
        ],
      });
    }
  }

  async find(req, res) {
    try {
      const {
        nome, cnpj, atividades, acessorios,
      } = req.query;
      const data = await RentalService.find(nome, cnpj, atividades, acessorios);
      return res.status(200).json({
        Locadoras: data,
      });
    } catch (error) {
      return res.status(RentalService.errorCodes(error)).json({
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
      const Rental = await RentalService.findById(id);
      return res.status(200).json(Rental);
    } catch (error) {
      return res.status(RentalService.errorCodes(error)).json({
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
    const RentalId = req.params.id;
    try {
      const rental = await RentalService.findById(RentalId);
      if (!rental) {
        throw new NotFound(`ID: ${RentalId}`);
      }
      await RentalService.delete(RentalId);
      res.status(204).end();
    } catch (error) {
      return res.status(RentalService.errorCodes(error)).json({
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
    const RentalId = req.params.id;
    const newData = req.body;
    try {
      const rental = await RentalService.findId(RentalId);
      if (!rental) {
        throw new NotFound(`ID: ${RentalId}`);
      }
      const updatedRental = await RentalService.update(RentalId, newData);
      res.status(200).json(updatedRental);
    } catch (error) {
      return res.status(RentalService.errorCodes(error)).json({
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

module.exports = new RentalController();
