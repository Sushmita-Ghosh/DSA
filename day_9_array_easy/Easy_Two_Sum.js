// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}

console.log(twoSum([3, 2, 4], 6));

// 0(n^2)

//https://www.youtube.com/watch?v=mq6ZQv_apmc&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=1
// only diff is ki ye object phle bna le rahe

//0(n)
// O(n)

var twoSum = function (nums, target) {
  const hash = {};

  // creating the key-value pair
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    hash[val] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let potentialKey = target - nums[i];

    if (hash[potentialKey] && hash[potentialKey] !== i) {
      return [i, hash[potentialKey]];
    }
  }
};

//leetcode - o(n)

var twoSum = function (nums, target) {
  let matchMap = {};
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (compliment in matchMap) {
      return [i, matchMap[compliment]];
    }
    matchMap[nums[i]] = i; // key value bnate raho  - agar compliment na mile toh - ek hi bar travel krni hai
  }
};
