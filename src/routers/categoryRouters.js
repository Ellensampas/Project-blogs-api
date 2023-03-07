const express = require('express');
const categoryController = require('../controllers/categoryController');
const validToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validToken, categoryController.add);

module.exports = router;