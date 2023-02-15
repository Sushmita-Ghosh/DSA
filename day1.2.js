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

/*** - nextleap solution
 * public void printPyramid(int n) {
		for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            System.out.print(i);
        }
        System.out.println();
    }
	}
 */

printPyramid(5);
