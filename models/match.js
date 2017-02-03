const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let matchSchema = new Schema({
  name: String,
  players: [{type: Schema.Types.ObjectId,ref:'Players'}],
  venue:
  {
    name: String,
    address: String,
    long: String,
    lat:String
  },
  matchDate: Date
})

var Match = mongoose.model('Matches', matchSchema);

module.exports = Match;
