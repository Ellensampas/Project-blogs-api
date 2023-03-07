const userService = require('../services/userService');

const add = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await userService.add(email, password);

  if (type === 'CAMPOS_INVALIDOS') {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  if (type === 'CAMPOS_INEXISTENTES') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return res.status(200).json({ token: message });
};

const createUser = async (req, res) => {
  const { displayName, email, password } = req.body;
  const { type, message } = await userService.newUser(displayName, email, password);
  if (type === 'DISPLAYNAME_INVALIDO') {
    return res.status(400).json({  
    message: '"displayName" length must be at least 8 characters long' });
  }
  if (type === 'EMAIL_INVALIDO') {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (type === 'PASSWORD_INVALIDO') {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long' });
  }
  if (type === 'EMAIL_EXISTENTE') {
    return res.status(409).json({ message: 'User already registered' });
  }
  return res.status(201).json({ token: message });
};

const listAllUser = async (_req, res) => {
  const { message } = await userService.listAll();
  return res.status(200).json(message);
};

module.exports = {
  add,
  createUser,
  listAllUser,
};