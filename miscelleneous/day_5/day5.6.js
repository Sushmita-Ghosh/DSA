/**
 * Given an array of integers, sort the array in ascending order using JavaScript.

Example 1:

Input: arr = [1,4,6,3] 
Output: [1,3,4,6]
Explanation: 
 */

/**
 * 
 * Optional.
A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
function(a, b){return a-b}
When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

Example:

The sort function will sort 40 as a value lower than 100.

When comparing 40 and 100, sort() calls the function(40,100).

The function calculates 40-100, and returns -60 (a negative value).
 */

function sortArray(arr) {
  // Your code goes here
  return arr.sort(function (a, b) {
    return a - b;
  });
}

console.log(sortArray([1, 4, 6, 3]));
