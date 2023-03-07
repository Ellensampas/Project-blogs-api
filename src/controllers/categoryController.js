const categoryService = require('../services/categoryService');

const add = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { type } = await categoryService.add(name);

  if (type === 'NAME_REQUIRED') {
    return res.status(400).json({ message: '"name" is required' });
  }

  return res.status(201).json({ id, name });
};

const listAllUser = async (_req, res) => {
    const { message } = await categoryService.listUsers();
    return res.status(200).json(message);
};

module.exports = {
  add,
  listAllUser,
};