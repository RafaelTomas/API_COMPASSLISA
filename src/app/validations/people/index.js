const Joi = require('joi').extend(require('@joi/date'));
const InvalidBody = require('../../errors/InvalidBody');
const validateCPF = require('../../helpers/cpf');

const patternsPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
const PassswordError = new Error(
  'Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum six in length',
);

const CPF = (cpf, helper) => {
  if (validateCPF(cpf)) {
    return helper.message('insert valid cpf');
  }
  return true;
};

const birthDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18);

module.exports = async (req, res, next) => {
  try {
    const peopleSchema = Joi.object({
      nome: Joi.string().min(3).trim().required(),
      cpf: Joi.string().custom(CPF).required(),
      data_nascimento: Joi.date().format('DD/MM/YYYY').max(birthDate).required(),
      email: Joi.string().email({ minDomainSegments: 2 }).required(),
      senha: Joi.string().min(6).pattern(patternsPassword).error(PassswordError)
        .required(),
      habilitado: Joi.string().valid('sim', 'não').required(),
    });

    const { error } = await peopleSchema.validate(req.body, { abortEarl: true });
    if (error) throw new InvalidBody(error);
    return next();
  } catch (error) {
    return res.status(400).json({
      message: 'bad request',
      details: [
        {
          message: error.message,
        },
      ],
    });
  }
};
