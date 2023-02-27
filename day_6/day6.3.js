/**
 * Remove duplicate value using set
 * Given an array of integers, write a program to return a new array with all duplicate values removed

Example 1:

Input: arr = [1, 2, 3, 2, 4, 5, 1, 6] 
Output: [1, 2, 3, 4, 5, 6]
 */

function removeDuplicates(arr) {
  // Your code goes here
  //   console.log(new Set(arr)); // -> set returns object

  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));
