const _ = require('../index')
const assert = require('chai').assert; 


describe("countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const results1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

  it ('should return 1 for Jason', () => {
    assert.equal(results1["Jason"], 1);
  });

  it ('should return undefined for Karima', () => {
    assert.equal(results1["Karima"], undefined);
  })

  it ('should return 2 for Fang', () => {
    assert.equal(results1["Fang"], 2);
  })
});

