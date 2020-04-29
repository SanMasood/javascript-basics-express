const express = require('express');

const booleanController = require('../controllers/booleanController.js');

const router = express.Router();

router.post ('/booleans/negate', booleanController.negateBoolean);

router.post ('/booleans/truthiness', booleanController.truthinessBoolean);

router.get('/booleans/is-odd/:param1', booleanController.isOddBoolean);

router.get('/booleans/:param1/starts-with/:param2', booleanController.startsWithBoolean);

module.exports = router;