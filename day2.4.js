// Star pattern 2
/**
 * Write a program to print the star patterns
 * Input: n = 3 
Output: 
***
**
*
 */

function StarPattern(n) {
  // Your code goes here
  let s = "";
  for (let i = n; i >= 1; i--) {
    s = "";
    for (let j = 1; j <= i; j++) {
      s += "*";
    }
    console.log(s);
  }
}

console.log(StarPattern(3));
