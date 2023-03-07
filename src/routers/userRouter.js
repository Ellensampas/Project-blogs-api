const express = require('express');
const userController = require('../controllers/userController');
const validaToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', validaToken, userController.listAllUser);
router.get('/:id', validaToken, userController.listId);
router.post('/', userController.createUser);

module.exports = router;