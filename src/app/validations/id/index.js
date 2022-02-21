const Joi = require('joi').extend(require('@joi/date'));

const NotFound = require('../../errors/NotFound');

const objectId = /^[0-9a-fA-F]{24}$/;

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      _id: Joi.string().pattern(objectId),
    });

    const { error } = await schema.validate(req.params, { abortEarl: true });
    if (error) throw new NotFound(error);
    return next();
  } catch (error) {
    return res.status(400).json({
      details: [
        {
          description: 'bad request',
          name: error.message,
        },
      ],
    });
  }
};
