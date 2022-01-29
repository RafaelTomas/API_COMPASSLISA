const Joi = require('joi');
const invalidBody = require('../../../erros/invalidBody');

const description = Joi.object({descricao: Joi.string().required()});

module.exports = async (req,res,next) =>{
  try {
    const carSchema = Joi.object({
      modelo: Joi.string().min(3).trim().required(),
      cor: Joi.string().min(3).trim().required(),
      ano: Joi.date().max('now').min('1950').raw().required(),
      acessorios: Joi.array().min(1).items(description).unique().required(),
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