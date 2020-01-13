const _ = require('../index')
const assert = require('chai').assert; 

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  it ("should return drama, given The Wire", () => {
    const results = _.findKeyByValue(bestTVShowsByGenre, "The Wire");
    assert.equal(results, "drama");
  });

  it ("should return undefined, given That 70s Show", () => {
    const results = _.findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    assert.equal(results, undefined);
  });
});