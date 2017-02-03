var express    = require('express');
var router     = express.Router();
var controller = require('../../controllers/players.controller.js')



// GET ALL PLAYER
router.get('/', controller.getAllPlayer)

router.get('/:username', controller.getSinglePlayer)

// router.post('/signin', controller.signIn)

router.post('/signup', controller.signUp)


module.exports = router;
