// assign
const player    = require('../models/players.model');
const hash    = require('password-hash');

const jwt     = require('jsonwebtoken');

// code
module.exports = {

  /** GET ALL Player**/
  getAllPlayer : function (req, res) {
    player.find( {}, (err, data) => {
      res.json(data)
    })
  }

}
