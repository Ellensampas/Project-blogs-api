const Joi = require('joi');

const emailValid = Joi.string().email().required();

module.exports = {
  emailValid,
};