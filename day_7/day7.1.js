// Function to find smallest among three numbers
/**
 * Write a program that takes in three integers and returns the smallest of the three. The function should return an integer.

Example 1:

Input: a = 1, b = 2, c = 3 
Output: 1
Explanation: 
 */

function min(a, b, c) {
  // Your code goes here
  if (a < b && a < c) return a;
  else if (b < a && b < c) return b;
  else return c;
}

console.log(min(1, 2, 3));
