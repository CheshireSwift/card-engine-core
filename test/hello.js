var should = require('should')
var add = require('../engine/card_engine')

describe('addition', function() {
  it('works how you would expect', function() {
    add(1, 2).should.be.exactly(3)
  })
})

