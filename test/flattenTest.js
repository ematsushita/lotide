const _ = require('../index')
const assert = require('chai').assert; 

describe("flatten", () => {
  it ("should return [1, 2, 3, 4, 5, 6] given [1, 2, [3, 4], 5, [6]]", () => {
    const results = (_.flatten([1, 2, [3, 4], 5, [6]]))
    assert.deepEqual(results, [1, 2, 3, 4, 5, 6])
  })
});
