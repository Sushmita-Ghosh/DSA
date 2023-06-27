/**
 * Given an object of key-value pairs and a key, write a program to return the corresponding value
 * 
 * Example 1:

Input: obj = {"a": 1, "b": 2, "c": 3}, key = "b" 
Output: 2
 */

function lookup(obj, key) {
  // Your code goes here
  //   console.log(Object.keys(obj));
  if (obj.hasOwnProperty(key)) return obj[key];

  // Nextleap solution
  //return obj[key];
}

console.log(lookup({ a: 1, b: 2, c: 3 }, "b"));
