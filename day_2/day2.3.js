/**
 * Star pattern
Write a program to print the following star pattern:

Example 1:

Input: n = 3 
Output:
*
**
***

Explanation: 
Example 2:

Input: n = 4 
Output: 
*
**
***
****
 */

function star(n) {
  // Your code goes here
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

console.log(star(5));

/**
 * nexleaps code --> converted to string
 * star(n) {
		let sb = "";
        for (let i = 1; i <= n; i++) {
            sb = "";
            for (let j = 1; j <= i; j++) {
                sb += "*";
            }
            console.log(sb);
        }
	}
 */
