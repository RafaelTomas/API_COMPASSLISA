const Joi = require('joi').extend(require('@joi/date'));
const invalidBody = require('../../../erros/invalidBody');
const validateCPF = require('../../helper/cpf');

const cpf = (cpf, helper) => {
  if (validateCPF(cpf)) {
    return helper.message('insert valid cpf');
  } else {
    return true;
  }
};

const birthdata = new Date((Date.now()) - (1000 * 60 * 60 * 24 * 365 * 18));

module.exports = async (req, res, next) => {
  try {
    const peopleSchema = Joi.object({
      nome: Joi.string().min(3).trim().required(),
      cpf: Joi.string().custom(cpf).unique().required(),
      data_nascimento: Joi.date().format('DD/MM/YYYY').max(birthdata).required(),
      email: Joi.string().email({ minDomainSegments: 2 }).required(),
      senha: Joi.string().min(6).required(),
      habilitado: Joi.string().valid('sim', 'não').required()
    });

    const { error } = await peopleSchema.validate(req.body, { abortEarl: true });
    if (error) throw new invalidBody(error);
    return next();
  } catch (error) {
    return res.status(400).json({
      'message': 'bad request',
      'details': [
        {
          'message': error.message,
        }
      ]
    });

  }
};