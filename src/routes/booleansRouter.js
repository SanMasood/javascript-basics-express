const express = require('express');

const booleansController = require('../controllers/booleansController.js');

const router = express.Router();

router.post ('/booleans/negate', booleansController.negateBoolean);

router.post ()