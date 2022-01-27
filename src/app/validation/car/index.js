const Joi = require('joi');
const invalidBody = require('../../../erros/invalidBody');

module.exports = async (req,res,next) =>{
  try {
    const carSchema = Joi.object({
      modelo: Joi.string().min(3).required().trim(),
      cor: Joi.string().pattern(/^[0-9]+$/, 'numbers').length(11).required(),
      ano: Joi.date().format('YYYY').max('now').min('1-1-1950').required(),
      acessorios: Joi.array().min(1).items(Joi.string().unique()).required(),
      quantidadePassageiros: Joi.number().min(2).required(),
    });
   
    const {error} = await carSchema.validate(req.body,{abortEarl:true});
    if(error) throw new invalidBody(error);
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