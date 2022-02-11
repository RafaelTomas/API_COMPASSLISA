const Joi = require('joi').extend(require('@joi/date'));
const InvalidBody = require('../../errors/InvalidBody');
const validateCNPJ = require('../../helpers/cnpj');

const CNPJ = (cnpj, helper) => {
  if (validateCNPJ(cnpj)) {
    return helper.message('insert valid cnpj');
  }
  return true;
};

const enderecoValidations = Joi.object({
  cep: Joi.string().min(8).max(8).trim()
    .required(),
  number: Joi.string().trim().required(),
  complemento: Joi.string().trim(),
  isFilial: Joi.boolean().required(),
});

module.exports = async (req, res, next) => {
  try {
    const rentalSchema = Joi.object({
      nome: Joi.string().min(3).trim().required(),
      cnpj: Joi.string().custom(CNPJ).required(),
      atividades: Joi.string().min(3).trim().required(),
      endereco: Joi.array().items(enderecoValidations).required(),
    });

    const { error } = await rentalSchema.validate(req.body, { abortEarl: true });
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
