const { Category } = require('../models');
// const { tok } = require('../helpers/tokenGene');

const add = async (name) => {
  const addCategory = await Category.create({ name });

  if (!name) {
    return { type: 'NAME_REQUIRED' };
  }
  return { type: null, message: addCategory };
};

const listUsers = async () => {
  const allUsers = await Category.findAll({ attributes: { include: 'name' } });
  return { type: null, message: allUsers };
};

module.exports = {
  add,
  listUsers,
};