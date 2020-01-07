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

const middle = function(arr) {  
  let returnArray = [];

  if (arr.length < 3) {
    return returnArray;
  }

  if (arr.length % 2 !== 0) {
    let value = Math.floor(arr.length / 2);
    returnArray.push(arr[value]);
    return returnArray;
  }

  if (arr.length % 2 === 0) {
    let value = (arr.length / 2);
    returnArray.push(arr[value-1], arr[value])
    return returnArray;
  }
  
};

console.log(middle([1, 2, 3]));
assertArraysEqual(middle([1, 2, 3]), [2]);