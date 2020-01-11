const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    }
    if (Array.isArray(arr1[i]) && !(Array.isArray(arr2[i]))) {
      return false;
    } 
    else if (!(Array.isArray(arr1[i])) && Array.isArray(arr2[i])) {
      return false;
    }
  }

  if (arr1.toString() !== arr2.toString()) {
    return false;
  }
  return true;

};


assertEqual(  eqArrays([[2, 3], [4]], [[2, 3], [4]]), true   ) // => true
assertEqual(  eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])  , false) // => false

assertEqual(  eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS