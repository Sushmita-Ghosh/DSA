/**
 * Update array using set
Write a function called "set" in JavaScript that takes in two inputs: an array, and a value. The function should add the value to the array if it is not already present. The function should return the updated array.

Example 1:

Input: arr = [1,2,3,4], val = 5 
Output: [1,2,3,4,5]
Explanation: 
Example 2:

Input: arr = [1,2,3], val = 3 
Output: [1,2,3]
Explanation: 
 */

function set(arr, val) {
  // Your code goes here
  arr.push(val);
  return [...new Set(arr)];
}

console.log(set([1, 2, 3, 4], 5));
console.log(set([1, 2, 3], 3));
