const express = require('express');

const stringsController = require('../controllers/stringsController.js');

const router = express.Router();

router.get ('/hello/:basename', stringsController.sayingHello);

router.get ('/upper/:basename', stringsController.uppercasing);

router.get ('/lower/:basename', stringsController.lowercasing);

router.get ('/first-characters/:basename', stringsController.returningfirstCharacters);

module.exports = router;