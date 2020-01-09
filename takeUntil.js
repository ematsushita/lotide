const eqArrays = function (arr1, arr2) {
  if (arr1.toString() === arr2.toString()){
    return true;
  } return false; 
};

const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else 
  
  {console.log(`❌ ❌ ❌ Assertion Failed: ${arr1} !==  ${arr2}`)};
};


//The function will return a "slice of the array with elements taken from the beginning." 
//It should keep going until the callback/predicate returns a truthy value.

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item)
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);