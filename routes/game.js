var express = require('express');
var router = express.Router();

var _ = require('lodash');

/* GET game state */
router.get('/', function(req, res, next) {
  res.json({
    areas: {
      'my-hand': makeHand('1D', '2S', '6S', '3C', '4H', '5H'),
      'their-hand': makeHand('3D', '1S', '5S', '1C', '2H', '3H'),
      'table': [{
        rank: '8',
        suit: 'C'
      }]
    },
    activePlayer: true
  });
});

function makeHand(...cardStrings) {
  return _.map(
    cardStrings,
    cardString => makeCard(cardString[0], cardString[1])
  );
}

function makeCard(rank, suit) {
  return {rank, suit};
}

module.exports = router
