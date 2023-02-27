/**
 * Number pattern printing
 * Write a program that prints out a times table for the numbers 1 through n, where n is an integer entered by the user.
 * Input: n = 4 
Output: 1 2 3 4 
2 4 6 8 
3 6 9 12 
4 8 12 16


 */

function TimesTable(n) {
  // Your code goes here

  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      str += `${i * j} `;
    }
    str += "\n";
  }
  return str;
}

console.log(TimesTable(4));

/**
 * Print one at a time - which is what next leap wanted
 * TimesTable (n) {
		// Your code goes here
  for (let i = 1; i <= n; i++) {
        let str = "";
    for (let j = 1; j <= n; j++) {
      str += `${i * j} `;
    }
    console.log(str);
  }
	}
 */
