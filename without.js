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

//Implement without which will return a subset of a given array, removing unwanted elements.

const without = function(source, itemsToRemove){
  let returnArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!(itemsToRemove.includes(source[i]))) {
      returnArray.push(source[i]);
    }
  }
  return returnArray;
};

console.log(without([1, 2, 3], [1]));
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);