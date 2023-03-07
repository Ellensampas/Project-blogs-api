const express = require('express');
const categoryController = require('../controllers/categoryController');
const validToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', validToken, categoryController.listAllUser);
router.post('/', validToken, categoryController.add);

module.exports = router;