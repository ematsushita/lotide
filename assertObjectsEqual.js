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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !==  ${expected}`);
  }
};

//Implement the definition for function eqObjects which will take in two objects 
//and returns true or false, based on a perfect match.

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let keys = Object.keys(object1);
  for (const elem of keys) {
    if (!(elem in object2)) {
      return false;
    } 
    if (Array.isArray(object1[elem]) && Array.isArray(object2[elem])) {
      if (!(eqArrays(object1[elem], object2[elem]))) {
        return false;
      } 
    } else if (object1[elem] !== object2[elem]){
      return false;
    }
  }
  return true;
};

//Implement assertObjectsEqual which will take in two objects and console.log an 
//appropriate message to the console.

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else 
  
  {console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !==  ${expected}`)};
};

assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3});