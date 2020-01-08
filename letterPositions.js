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

//We'll implement a new function letterPositions which will return all 
//the indices (zero-based positions) in the string where each character is found.

//For each letter, instead of returning just one number to represent its number of 
//occurrences, multiple numbers may be needed to represent all the places in the 
//string that it shows up.

const letterPositions = function(str) {
  let results = {};
  let newStr = str.toLowerCase();
  let pos = 0;

  for (const char of newStr) {
    if (char === " ") {
      pos += 1;
      continue;
    }
    if (results[char]) {
      results[char].push(newStr.indexOf(char, pos));
    } else {
      results[char] = [newStr.indexOf(char)];
    }
    pos += 1;
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));