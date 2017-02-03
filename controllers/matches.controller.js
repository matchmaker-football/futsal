const Match = require('../models/match.js')
const config = require('../config');
const googleMapsClient = require('@google/maps').createClient({
  key: config.googleKey
});

module.exports = {
  createMatch: function(req,res) {
    var venue = {query:req.body.venue}
    console.log(venue);
    googleMapsClient.places(venue, function(err, response) {
      if (!err) {
        var latitude = response.json.results[0].geometry.location.lat
        var longitude = response.json.results[0].geometry.location.lng
        var addr = response.json.results[0].formatted_address
        var open = response.json.results[0].opening_hours.open_now
        var vname = response.json.results[0].name
        var newMatch = new Match()
        newMatch.name= req.body.name,
        newMatch.players.push(req.body.playerid),
        newMatch.venue=
        {
          name: vname,
          address:addr,
          long: longitude,
          lat:latitude
        },
        newMatch.matchDate= req.body.date

       newMatch.save(function(err){
         if(err) throw err;
         res.send(newMatch)
       })
      }
    })
  },
  getAllMatch: function(req,res) {
    Match.find({}).populate('players',{password:false,__v:false,updatedAt:false,createdAt:false}).then(function(data) {
      res.send({
        message: 'Show all Matches',
        matches: data
      })
    })
  }

}
