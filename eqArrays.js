const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.toString() === arr2.toString()){
    return true;
  } return false; 
};



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS