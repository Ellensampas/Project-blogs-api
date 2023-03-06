const { User } = require('../models');
const { tok } = require('../helpers/tokenGene');
const { emailValid } = require('../validations/userValidations');

const add = async (email, password) => {
  const log = await User.findOne({ where: { email, password } });
  const validaEmail = emailValid.validate(email);

  if (!validaEmail || password.length < 6) {
    return { type: 'CAMPOS_INEXISTENTES' };
  }

  if (!log) {
    return { type: 'CAMPOS_INVALIDOS' };
  }
  
  const tokAuth = tok(log);

  return { type: null, message: tokAuth };
};

module.exports = {
  add,
};