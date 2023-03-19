/**
 * Maximum Product Difference Between Two Pairs
The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

Return the maximum such product difference.

 

Example 1:

Input: nums = [5,6,2,7,4]
Output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34.
Example 2:

Input: nums = [4,2,5,9,7,4,8]
Output: 64
Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
The product difference is (9 * 8) - (2 * 4) = 64.
 */

// The difference is max when we substract the greatest from the least in an array
// so product of the greatest integers - product of the least integers yield the max product diffrence

//
// The (a,b)=>a-b comparison function subtracts the second item from the first item,
// thus returning a negative value if the second item is bigger, a positive value if the second item is smaller, '
// and 0 for equality.
// a-b - ascending
// b-a descending

function maxProductDifference(nums) {
  nums.sort((a, b) => {
    return a - b;
  });

  return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
}

console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]));

// The best o(n) solution

// instead of sorting the array we are keeping track of the max and mix
var maxProductDifference = function (nums) {
  let max1 = 0,
    max2 = 0,
    min1 = Number.MAX_VALUE,
    min2 = Number.MAX_VALUE;
  nums.forEach((a) => {
    if (a >= max1) {
      max2 = max1;
      max1 = a;
    } else if (max2 < a) max2 = a;

    if (a < min1) {
      min2 = min1;
      min1 = a;
    } else if (a < min2) min2 = a;
  });
  return max1 * max2 - min1 * min2;
};

// leetcode

var maxProductDifference = function (nums) {
  let min = 1e4,
    prevMin = min;
  let max = 0,
    prevMax = 0;

  for (const n of nums) {
    if (n > max) {
      prevMax = max;
      max = n;
    } else if (n > prevMax) {
      prevMax = n;
    }

    if (n < min) {
      prevMin = min;
      min = n;
    } else if (n < prevMin) {
      prevMin = n;
    }
  }

  return max * prevMax - min * prevMin;
};
