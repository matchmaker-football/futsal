var express = require('express');
var router = express.Router();
var match = require('../controllers/matches.controller.js')

// Geocode an address.
router.get('/all', match.getAllMatch)

router.post('/make',match.createMatch)

module.exports = router
