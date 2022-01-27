const JoiImport = require('joi');
const DateExtension = require ('@joi/date');
const InvalidBody = require('../../../erros/InvalidBody');

const Joi = JoiImport.extend(DateExtension);
const now = Date.now();
const cutoffDate = new Date(now - (1000 * 60 * 60 * 24 * 365 * 18));

module.exports = async (req,res,next) =>{
  try {
    const peopleSchema = Joi.object({
      name: Joi.string().min(3).max(30).required().trim(),
      cpf: Joi.string().pattern(/^[0-9]+$/, 'numbers').length(11).required(),
      data_nascimento: Joi.date().format('DD/MM/YYYY').max(cutoffDate).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required(),
      senha: Joi.string().min(6).required(),
      habilitado: Joi.string().valid('sim','não').required()
    });
    /*  */
    const {error} = await peopleSchema.validate(req.body,{abortEarl:true});
    if(error) throw new InvalidBody(error);
    return next();
  } catch (error) {
    return res.status(400).json({
      'message': 'bad request',
      'details':[
        {
          'message':error.message,
        }
      ]
    });
        
  }
};