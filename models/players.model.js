"use strict"

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playersSchema = new Schema({
  username: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  position: { type: String, required: true},
  address: String,
  phone: String
},
{
  timestamps: true
});

var Players = mongoose.model('Players', playersSchema)

module.exports = Players;
