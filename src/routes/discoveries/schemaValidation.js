const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
  title: Joi
    .string()
    .min(3)
    .max(30)
    .required(),
  description: Joi
    .string()
    .max(80)
    .required(),
});

module.exports = schema;
