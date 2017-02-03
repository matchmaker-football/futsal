"use strict"

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playersSchema = new Schema({
  name: String,
  email: String,
  password: String,
  position: String,
  address: String,
  phone: String
},
{
  timestamps: true
});

var Players = mongoose.model('Players', playersSchema)

module.exports = Players;
