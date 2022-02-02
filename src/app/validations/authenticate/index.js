const Joi = require('joi').extend(require('@joi/date'));
const invalidBody = require('../../errors/InvalidBody');

const patternsPassword =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
const PassswordError = new Error('Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum six in length');


module.exports = async (req, res, next) => {
  try {
    const peopleSchema = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2 }).required(),
      senha: Joi.string().min(6).pattern(patternsPassword).error(PassswordError).required(),
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