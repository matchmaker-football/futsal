// assign
const player    = require('../models/players.model');
const hash    = require('password-hash');

const jwt     = require('jsonwebtoken');

// code
module.exports = {

  /** GET ALL Player **/
  getAllPlayer : function (req, res) {
    player.find( {}, (err, data) => {
      res.json(data)
    })
  },

  /** GET SINGLE Player **/
  getSinglePlayer : function (req, res) {
    player.findOne( {username: req.params.username}, (err, data) => {
      res.json(data)
    })
  },

  /** SIGN UP **/
  signUp : function (req, res, next) {
    player.create({
        username: req.body.username,
        password: hash.generate(req.body.password),
        position: req.body.position,
        address: req.body.address,
        phone: req.body.phone
      })
      .then(function(data){
        res.send({
          message :'New player has been created',
          username:data.username,
          password:'[ENCRYPTED]',
          position: data.position,
          address: data.address,
          phone: data.phone
        })
      })
  }
}
