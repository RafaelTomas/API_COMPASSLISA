const peopleService = require('../services/PeopleService');
const NotFound = require('../errors/NotFound');
const errorCodes = require('../utils/errorCodes');

class peopleController {
  async create(req, res) {
    try {
      const data = await peopleService.create(req.body);
      return res.status(200).json({
        Pessoa: {
          _id: data.id,
          nome: data.nome,
          cpf: data.cpf,
          data_nascimento: data.data_nascimento,
          email: data.email,
          senha: data.senha,
          habilitado: data.habilitado,
        },
      }).send();
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
      const data = await peopleService.find(payload);
      return res.status(200).json({
        Pessoas: data,
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
    const id = req.params;
    try {
      const people = await peopleService.findById(id);
      return res.status(200).json(people);
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
    const peopleId = req.params.id;
    try {
      const people = await peopleService.findById(peopleId);
      if (!people) {
        throw new NotFound(`ID: ${peopleId}`);
      }
      await peopleService.delete(peopleId);
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
    const peopleId = req.params.id;
    const newData = req.body;
    try {
      const people = await peopleService.findId(peopleId);
      if (people === null) {
        throw new NotFound(`ID: ${peopleId}`);
      }
      const updatedpeople = await peopleService.update(peopleId, newData);
      res.status(200).json(updatedpeople);
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

module.exports = new peopleController();
