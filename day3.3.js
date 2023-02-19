/***
 * Triangle pattern print
Write a program that prints out the following pattern:

Input: n = 3 
Output:   *
 ***
*****
 */

function trianglePattern(n) {
  // Your code goes here
  for (let i = 1; i <= n; i++) {
    let str = "";
    // spaces
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    // star
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += "*";
    }
    console.log(str);
  }
}

console.log(trianglePattern(3));
