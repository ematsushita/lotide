const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !==  ${expected}`);
  }
};

//The function should take in a sentence (as a string) and then return a count of 
//each of the letters in that sentence.

const countLetters = function(str) {
  let newStr = str.split(" ").join("").toLowerCase();
  let results = {};
  for (const char of newStr) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  return results;
};

const results1 = countLetters("hello");

assertEqual(results1["l"], 2);