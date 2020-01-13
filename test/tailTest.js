const _ = require('../index')
const assert = require('chai').assert; 

describe("#tail", () => {
  it ('should return ["Lighthouse, Labs"] given ["Hello", "Lighthouse", "Labs"])', () => {
    const results = _.tail(["Hello", "Lighthouse", "Labs"])
    assert.deepEqual(_.tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
})

//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, ["Lighthouse", "Labs"]);
//assertEqual(result.length, 2); // ensure we get back two elements
//assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
//assertEqual(result[1], "Labs"); // ensure second element is "Labs"