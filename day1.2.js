/**
 * 
 * Print a pyramid pattern of numbers using an array.

Example 1:

Input: n = 5 
Output: 1
22
333
4444
55555

Explanation: } n 
 */

function printPyramid(n) {
  // Your code goes here
  let i,
    k,
    str = "";
  for (i = 1; i <= n; i++) {
    for (k = 1; k <= i; k++) {
      str += i;
    }
    console.log(str);
    str = "";
  }
}

printPyramid(5);
