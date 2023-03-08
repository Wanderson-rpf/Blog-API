const express = require('express');
const { UserController } = require('../controllers');
const validationToken = require('../middleware/validationToken');

const router = express.Router();

router.get(
  '/', validationToken,
  UserController.getAllUser,
);

router.get(
  '/:id', validationToken,
  UserController.getById,
);

router.post(
  '/', 
  UserController.createUser,
);

module.exports = router;