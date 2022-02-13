const Joi = require('joi').extend(require('@joi/date'));
const InvalidBody = require('../../errors/InvalidBody');

const patternId = /^[0-9a-fA-F]{24}$/;

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id: Joi.string().pattern(patternId).required(),
    });

    const { error } = await schema.validate(req.params, { abortEarl: true });
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
