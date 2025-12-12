//leetcode.com/problems/missing-number/

var missingNumber = function (nums) {
  // get max number
  let n = nums.length;

  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// Using sum formula

var missingNumber = function (nums) {
  let n = nums.length;
  // finding the range of n  & sum of n natural numbers
  let sum = (n * (n + 1)) / 2;

  for (e of nums) {
    sum -= e;
  }

  return sum;
};

/**
 * BRUTE FORCE
 *
 * 1. Sort the array
 * 2. Check if each number is nextnumber-1
 * if not that's the missing number (next number)
 */

var missingNumber = function (nums) {
  let n = nums.length;

  let sortedNum = nums.sort((a, b) => a - b);

  for (let i = 0; i <= n; i++) {
    if (sortedNum[i] != sortedNum[i + 1] - 1) {
      return i + 1;
    }
  }
};

// o(nlogn)

/**
 * Since these are disntict natural numbers
 * what we can do is sum the numbers till n (sum of n natural numbers )
 * then sum the array
 * and return the difference
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let partialSum = 0;

  for (let i = 0; i < n; i++) {
    partialSum = partialSum + nums[i];
  }

  return totalSum - partialSum;
};
