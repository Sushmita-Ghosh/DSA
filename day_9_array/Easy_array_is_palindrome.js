// // Check if array is palindrome
// Problem Description
// Given an array nums of size n . Complete a function isPalindrome which returns true if array is palindrome else return false
// Palindrome is a sequence which reads the same forwards and backwards

// Example 1:

// Input : nums=[1,2,3,3,2,1]
// Output : true
// Explanation : The given array nums reads same from forward and backward
// Example 2:

// Input: nums=[1,1,2,2]
// Output: false

// Approach 1 -> palindrome is reverse is true to the original
// O(n/2) => O(n) --> drop the constants to get the time complexity
// start to end  -> keep two pointers and keep compairing the values till start = end or start > end
// and if we find any of the places not equal we return false
// keep incrementing and if it comes out of the loop we return true

// second approach -> create a rev of the array ->
// rev & ori are same

// 1st approach - better solution

function isPalindrome(nums) {
  start = 0;
  end = nums.length - 1;

  while (start < end) {
    if (nums[start] !== nums[end]) return false;
    start++;
    end--;
  }

  return true;
}

// console.log(isPalindrome([[1, 2, 3, 3, 2, 1]]));

// console.log(isPalindrome([1, 1, 2, 2]));

// second approach

function isPalindrome(nums) {
  // reversing the nums array
  let rev = [];
  let n = nums.length;
  for (let i = -1; i >= 0; i--) {
    rev[n - i - 1] = nums[i];
  }

  // check if rev = the original array

  for (let i = 0; i < n - 1; i++) {
    if (rev[i] !== nums[i]) return false;
  }
  return true;
}

console.log(isPalindrome([[1, 2, 3, 3, 2, 1]]));

console.log(isPalindrome([1, 1, 2, 2]));
