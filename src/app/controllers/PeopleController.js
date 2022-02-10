const peopleService = require('../services/PeopleService');
const NotFound = require('../errors/NotFound');

class peopleController {
  async create(req, res) {
    try {
      const data = await peopleService.create(req.body);
      return res.status(201).json({
        Pessoa: {
          _id: data.id,
          nome: data.nome,
          cpf: data.cpf,
          data_nascimento: data.data_nascimento,
          email: data.email,
          senha: data.senha,
          habilitado: data.habilitado,
        },
      });
    } catch (error) {
      return res.status(peopleService.errorCodes(error)).json({
        message: 'bad request',
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
        _id, nome, cpf, data_nascimento, habilitado,
      } = req.query;
      const data = await peopleService.find(_id, nome, cpf, data_nascimento, habilitado);
      return res.status(200).json({
        Pessoas: data,
      });
    } catch (error) {
      return res.status(peopleService.errorCodes(error)).json({
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
    const id = req.params;
    try {
      const people = await peopleService.findById(id);
      return res.status(200).json(people);
    } catch (error) {
      return res.status(peopleService.errorCodes(error)).json({
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
    const peopleId = req.params.id;
    try {
      const people = await peopleService.findById(peopleId);
      if (!people) {
        throw new NotFound(`ID: ${peopleId}`);
      }
      await peopleService.delete(peopleId);
      res.status(204).end();
    } catch (error) {
      return res.status(peopleService.errorCodes(error)).json({
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
      return res.status(peopleService.errorCodes(error)).json({
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

module.exports = new peopleController();
