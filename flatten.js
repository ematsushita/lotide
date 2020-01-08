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

//Create a function flatten which will take in an array of arrays 
//and return a "flattened" version of the array.

const flatten = function(arr) {
  let returnArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])){
      for (let j = 0; j < arr[i].length; j++){
        returnArray.push(arr[i][j]);
      }
    } else {
      returnArray.push(arr[i]);
    }
  }
  return returnArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);