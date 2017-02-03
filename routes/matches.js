var express = require('express');
var router = express.Router();
var match = require('../controllers/matches.controller.js')
const player = require('../controllers/players.controller.js');

// Geocode an address.
router.get('/all', match.getAllMatch)

router.post('/make',match.createMatch)

router.put('/join', match.joinMatch)

module.exports = router
