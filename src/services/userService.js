const { User } = require('../models');
const { tok } = require('../helpers/tokenGene');
const { emailValid } = require('../validations/userValidations');
const { verifyDisplayName,
verifyPassword, verifyEmail } = require('../validations/userValid');

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

const newUser = async (displayName, email, password, image) => {
  const log = await User.findOne({ where: { email } });

  if (log) {
    return { type: 'EMAIL_EXISTENTE' };
  }

  if (verifyDisplayName(displayName)) {
   return { type: 'DISPLAYNAME_INVALIDO' };
  }

  if (!verifyEmail(email)) {
    return { type: 'EMAIL_INVALIDO' };
  }

  if (verifyPassword(password)) {
    return { type: 'PASSWORD_INVALIDO' };
  }
  const creat = await User.create({ displayName, email, password, image });
  const tokAuth = tok(creat);
  return { type: null, message: tokAuth };
};

const listAll = async () => {
 const allUsers = await User.findAll({ attributes: { exclude: 'password' } });
 return { type: null, message: allUsers };
};

module.exports = {
  add,
  newUser,
  listAll,
};