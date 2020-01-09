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

/* 
Function Definition
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

/*const results1 = map(words, word => word[0]);
console.log(results1);*/

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);

