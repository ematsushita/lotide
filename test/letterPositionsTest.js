const _ = require('../index')
const assert = require('chai').assert; 

describe("#letterPositions", () => {
  it ("should return [2, 3] given 'hello.l'", () => {
    const results = _.letterPositions("hello");
    assert.deepEqual(results.l, [2, 3])
  })
})