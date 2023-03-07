const express = require('express');
const blogPostController = require('../controllers/blogPostController');
const validToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', validToken, blogPostController.listPosts);

module.exports = router;