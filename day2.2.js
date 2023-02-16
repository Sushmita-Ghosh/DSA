/**
 * Prime Number
 * Write a program to check if a given number is a prime number.  --> divisible by 1 or itself
 * Example 1:

Input: n = 5 
Output: true
Explanation: 
 */

function isPrime(n) {
  // Your code goes here
  let i,
    flag = true;
  for (i = 2; i < n; i++) {
    // start from 2 kyunki 1 se koi fark ni pdhta sab divisible hain
    if (n % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
