const express = require('express');

const stringsController = require('../controllers/stringsController.js');

const router = express.Router();

router.get ('/strings/hello/:basename', stringsController.sayingHello);

router.get ('/strings/upper/:basename', stringsController.uppercasing);

router.get ('/strings/lower/:basename', stringsController.lowercasing);

router.get ('/strings/first-characters/:basename', stringsController.returningfirstCharacters);

module.exports = router;