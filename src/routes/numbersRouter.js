const express = require('express');

const numbersController = require('../controllers/numbersController.js');

const router = express.Router();

router.get('/add/:param1/and/:param2', numbersController.addNumbers);
router.get('/subtract/:param1/and/:param2', numbersController.subtractNumbers);
router.post('/multiply', numbersController.multiplyNumbers);
router.post('/divide', numbersController.divideNumbers);
router.post('/remainder', numbersController.remainderNumbers);

module.exports = router;
