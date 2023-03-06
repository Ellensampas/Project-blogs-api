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

module.exports = {
  add,
};