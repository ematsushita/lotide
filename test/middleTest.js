const _ = require('../index')
const assert = require('chai').assert; 

describe("#middle", () => {
  it ('should return [2] when given [1, 2, 3])', () => {
    const results = _.middle([1, 2, 3]);
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  })
  it ('should return [2, 3] when given [1, 2, 3, 4])', () => {
    const results = _.middle([1, 2, 3, 4]);
    assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3]);
  })
})


