// https://leetcode.com/problems/hamming-distance/

/**
 * 
Example 1:

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
 */

// how to convert to binary
//  let num = 9
// num.toString(2) --> 1001

function hammingDistance(x, y) {
  // convert to binary
  x = x.toString(2);
  y = y.toString(2);

  // add zero in front if the length not same as
  // hamming distance can be calculated for the 2 only if their lengths are same

  if (x.length < y.length) {
    while (x.length != y.length) {
      x = "0" + x;
    }
  } else {
    while (x.length != y.length) {
      y = "0" + y;
    }
  }

  // calculating the distance
  let distance = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] != y[i]) {
      distance++;
    }
  }

  return distance;
}

console.log(hammingDistance(1, 4));
