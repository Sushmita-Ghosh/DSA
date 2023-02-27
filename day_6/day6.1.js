/**
 * Given an array of integers, write a program to return a new array with each element multiplied by 2
 * Example 1:

Input: arr = [1, 2, 3, 4, 5] 
Output: [2, 4, 6, 8, 10]
Explanation: 
 */

function doubleArray(arr) {
  // Your code goes here

  return arr.map((ele) => ele * 2);
}

console.log(doubleArray([1, 2, 3, 4, 5]));
