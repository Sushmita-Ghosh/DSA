// https://leetcode.com/problems/contains-duplicate/
/**
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 */

// Approach 1 using sorting
// time O(nlogn) space O(1)

var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b); // sort the array in ascending order
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));

// using Set : mindblowing time O(n) space O(n)

var containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size !== nums.length; // if the size not equal return true else return false
};
