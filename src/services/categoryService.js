const { Category } = require('../models');
// const { tok } = require('../helpers/tokenGene');

const add = async (name) => {
  const addCategory = await Category.create({ name });

  if (!name) {
    return { type: 'NAME_REQUIRED' };
  }
  return { type: null, message: addCategory };
};

module.exports = {
  add,
};