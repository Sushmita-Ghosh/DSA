/***
 * https://leetcode.com/problems/maximum-subarray/
 * 
 * 53. Maximum Subarray
Medium
32.5K
1.4K
Companies
Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

// Brute Force Solution
// run a loop from 0 to length of array and and loop from ith element to length of array
// we are gonna find the sum of all the subarrays and for each we will compare the sum with max and modify max

// Follow Up: What if interviewer told to return the subarray
var maxSubArray = function (nums) {
  let maxSum = nums[0];

  // for returning the subarray
  let startIdx = 0;
  let endIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j]; // we found the current sum
      if (currentSum > maxSum) {
        maxSum = currentSum;
        startIdx = i;
        endIdx = j;
      }
    }
  }

  // return maxSum;
  return {
    sum: maxSum,
    subArray: nums.slice(startIdx, endIdx + 1),
  };
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Time Complexity - O(n^2)
// Space Complexity - O(1)

// KADANE'S ALGORITHM
/**
 * Kadane's algorithm runs one for loop over the array and at the beginning of each iteration, if the current sum is negative,
 *  it will reset the current sum to zero.
 */

var maxSubArray = function (nums) {
  let sum = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) max = sum;
    if (sum < 0) sum = 0; // -ve
  }

  return max;
};

// time complexity - O(n)
