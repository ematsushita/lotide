const _ = require('../index')
const assert = require('chai').assert; 

describe("#eqObjects", () => {
  it ("should return true given { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    const results = _.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    assert.equal(results, true);
  });

  it ("should return false given { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    const results = _.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    assert.equal(results, false);
  })
})