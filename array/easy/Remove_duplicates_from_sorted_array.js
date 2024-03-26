// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that
// each unique element appears only once.The relative order of the elements should be kept the same.
//  Then return the number of unique elements in nums.

/**
 * Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 */

var removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    //0(n)
    if (nums[i] === nums[i + 1]) {
      // remove element
      nums.splice(i + 1, 1); // for only 1 element --> O(1)
      i--; // do not increase i as there might be more than 1 duplicate
    }
  }

  return nums.length;
};

// Time: O(n)
// Space: O(1) // inplace - no extra space

// Without JS Menthods - Two Pointer Approach

function removeDuplicatesSecond(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

// dry run
// [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
//  i = 4  --> but there are 5 elements --> 0 se start hui thi
//  j = 9

// console.log(removeDuplicatesSecond([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicatesSecond([1, 1, 2]));

// Time: O(n)
// Space: O(1) // inplace - no extra space

// Striver
// Brute force

// create a set of the arr
// loop through the arr and modify the elements - this is however not inplace- we need extra space

const removeDuplicatesBruteForce = (nums) => {
  let set = new Set(nums);
  // console.log(set);
  // for (let ele of nums) {
  //   set.add(ele);
  // }

  return set.size;
};

// o(nlogn) + o(n)
// o(n)  -> due to set

// console.log(removeDuplicatesBruteForce([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Optimised Approach without extra memory

const removeDuplicatesOptimal = (nums) => {
  // we will take two pointers i and j ; i=0; j=i+1
  // we will increase j one by one and whenever there is different element in arr[i] & arr[j]
  // we will update arr[i+1] with arr[j] then increment i --> return i+1

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      // interchange value here
      nums[i + 1] = nums[j];
      i++;
    }
  }

  return i + 1;
};

console.log(removeDuplicatesOptimal([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicatesOptimal([1, 1, 2]));
