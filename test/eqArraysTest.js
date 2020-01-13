const _ = require('../index')
const assert = require('chai').assert; 

describe("#eqArrays", () =>{
  it ("should return true given [[2, 3], [4]], [[2, 3], [4]]", () => {
    const results = _.eqArrays([[2, 3], [4]], [[2, 3], [4]]);
    assert.equal(results, true);
  })

  it ("should return false given [[2, 3], [4]], [[2, 3], [4, 5]]", () => {
    const results = _.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]);
    assert.equal(results, false);
  });
});
