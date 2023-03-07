const { User, BlogPost, Category } = require('../models');
// const { tok } = require('../helpers/tokenGene');

const listAllPosts = async (id) => {
  const allUsers = await BlogPost.findAll({ where: { userId: id },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category,
         as: 'categories',
         attributes: { exclude: 'PostCategory' } }] });
    return { type: null, message: allUsers };
};

module.exports = {
  listAllPosts,
};