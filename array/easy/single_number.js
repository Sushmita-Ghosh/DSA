/**
 * https://leetcode.com/problems/single-number/description/
 *  Single Number
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1

 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
 */

// USING HASHING we keep track of the count then loop over the
// object and check the count == 1

var singleNumber = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    /** If my hash doesnot have the value then just keep 1 ,
     * else increase the count
     */
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === 1) {
      return nums[i];
    }
  }
};

/**
 * BITWISE XOR
 * a xor 0 = a
 * a xor a = 0
 *
 * a xor b xor a xor b xor c = c [so all the duplicates get cancelled out]
 * since there is only a single number it will remain
 */

var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};
