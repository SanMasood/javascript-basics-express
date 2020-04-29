const express = require('express');

const arraysController = require('../controllers/arraysController.js');

const router = express.Router();

router.post ('/element-at-index/:param1', arraysController.elementAtIndex);

router.post('/to-string', arraysController.toStringed);

router.post('/append', arraysController.appended);
router.post('/starts-with-vowel', arraysController.startsWithVowel);
router.post('/remove-element', arraysController.removeElement);

module.exports = router;