// assign
const player    = require('../models/players.model');
const hash    = require('password-hash');

const jwt     = require('jsonwebtoken');

// code
module.exports = {

  /** GET ALL Player **/
  getAllPlayer : function (req, res) {
    player.find( {}, {
          _id       : false,
          password  : false,
          __v       : false}
      , (err, data) => {
      res.json(data)
    })
  },

  /** GET SINGLE Player **/
  getSinglePlayer : function (req, res) {
    player.findOne( {username: req.params.username}, (err, data) => {
      res.json(data)
    })
  },

  /** getPlayerByPos **/
  getPlayerByPos : function (req, res) {
    player.find( {position: req.params.position.toLowerCase() }, (err, data) => {
      res.json(data)
    })
  },

  /** SIGN UP **/
  signUp : function (req, res, next) {
    player.create({
        username: req.body.username,
        password: hash.generate(req.body.password),
        position: req.body.position.toLowerCase(),
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
  },

  /** SIGN IN **/
  signIn : function(req,res,next) {
      player.findOne({username: req.body.username}).then(function(data) {
        if (data == null) {
          res.send('Player not found')
        }
        else if(hash.verify(req.body.password,data.password)){
          var token = jwt.sign({ id: data._id, username: data.username }, process.env.SECRET, {expiresIn : 60*60});
          res.json({token: token})
        }
        else{
          res.send('invalid username or password')
        }
    })
  },

  /** DELETE **/
  deletePlayer : function(req,res){
    player.findOneAndRemove( {username: req.params.username}, function(err){
      res.send('Player has been removed')
    })
  },

  /** UPDATE **/
  updatePlayer :function(req, res, next) {
    player.findOneAndUpdate({username: req.params.username}, req.body, {new: true}).then( (data) => {
        res.send({message :`player ${req.params.username} has been updated`,
        username:data.username,
        password:'[ENCRYPTED]',
        position: data.position,
        address: data.address,
        phone: data.phone
      })
    })
  },

  // --------- Verify ---------------
  verifyPlayer : function (req, res, next) {
    var decode = jwt.verify(req.header('token'), process.env.SECRET)

    if (decode && decode.username == req.params.username){
      next()
    }
    else{
      res.send('Wrong Token')
    }

  }



}
