const Joi = require('joi');

const emailValid = Joi.string().email().required();
// const passwordValid = Joi.string().min(6).required();

module.exports = {
  emailValid,
  // passwordValid,
};