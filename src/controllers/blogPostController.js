const blogPostService = require('../services/blogPostService');

const listPosts = async (req, res) => {
  const { id } = req.payload;
  const { message } = await blogPostService.listAllPosts(id);
  return res.status(200).json(message);
};

module.exports = {
  listPosts,
};