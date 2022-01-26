const peopleService = require('../service/peopleService');
const notFound = require('../../erros/notFound');

class peopleController {

  async create(req, res) {
    try {
      const data = await peopleService.create(req.body);
      return res.status(201).json({
        'Pessoas': {
          '_id': data._id,
          'nome': data.nome,
          'cpf': data.cpf,
          'data_nascimento': data.data_nascimento,
          'email': data.email,
          'senha': data.senha,
          'habilitado': data.habilitado
        }
      });
    } catch (error) {
      return res.status(peopleService.errorCodes(error)).json({
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
      const nome1 = req.query.nome;
      const data = await peopleService.find(nome1);
      return res.status(200).json({
        'peoples': data
      });
    } catch (error) {
      return res.status(peopleService.errorCodes(error)).json({
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
    const id = req.params;
    try {
      const people = await peopleService.findById(id);
      return res.status(200).json(people);
    } catch (error) {     
      return res.status(peopleService.errorCodes(error)).json({
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
    const peopleId = req.params._id;
    try {
      const people = await peopleService.findId(peopleId);
      if (people === null) {
        throw new notFound(`ID: ${peopleId}`);
      }
      await peopleService.delete(peopleId);
      res.status(204).end();
    } catch (error) {
      return res.status(peopleService.errorCodes(error)).json({
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
    const peopleId = req.params._id;
    const newData = req.body;
    try {
      const people = await peopleService.findId(peopleId);
      if (people === null) {
        throw new notFound(`ID: ${peopleId}`);
      }
      const updatedpeople = await peopleService.update(peopleId, newData);
      res.status(200).json(updatedpeople);
    } catch (error) {
      return res.status(peopleService.errorCodes(error)).json({
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

module.exports = new peopleController;