const express = require('express');
const LoginController = require('../controllers/Login');

const router = express.Router();

router.post('/', LoginController);

module.exports = router;