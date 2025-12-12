/**
 * Max Consecutive Ones https://leetcode.com/problems/max-consecutive-ones/description/
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.} nums 
 */

var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
      maxCount = Math.max(count, maxCount);
    }
    if (nums[i] == 0) {
      count = 0;
    }
  }
  return maxCount;
};

var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    } else {
      maxCount = Math.max(count, maxCount);
      count = 0;
    }
  }
  return Math.max(maxCount, count); // here we have to update as the updation is happening in second loop
};
