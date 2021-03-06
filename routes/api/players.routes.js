var express    = require('express');
var router     = express.Router();
var controller = require('../../controllers/players.controller.js')



// GET ALL PLAYER
router.get('/all', controller.getAllPlayer)

router.get('/:username', controller.verifyPlayer, controller.getSinglePlayer)

router.get('/pos/:position', controller.getPlayerByPos)

router.post('/signin', controller.signIn)

router.post('/signup', controller.signUp)

router.put('/:username',controller.verifyPlayer, controller.updatePlayer)

router.delete('/:username',controller.verifyPlayer, controller.deletePlayer)


module.exports = router;
