// https://leetcode.com/problems/rotate-array/
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]

// Rotation means we are shifting elements to the right.

function rotatArray(arr, k) {
  let size = arr.length; //7

  // if the size is greater than the length - we need to only rotate the array
  //  by the remainder that we get - as till size the array will remain in same shape

  if (k > size) {
    k = k % size; // say size is 9 --> array length is 7 - we need 9%7 = 2 rotations
  }

  // [1,2,3,4,5,6,7]
  const rotated = arr.splice(size - k, size); // O(n)
  // arr.splice(7-3, 7)
  // [1, 2, 3, 4] rotated = [5, 6, 7]
  // [we are telling to deleteing 7
  // elements if 7 elemennts not found - it will delete howmany elements are there]
  arr.unshift(...rotated); // O(n)

  return arr;
}

// Time complexity - O(n)

// Without using JS inbuilt function

function rotatArrayOptimised(arr, k) {
  let size = arr.length;

  if (k > size) {
    k = k % size;
  }

  // we need to reverse the array by below three to achieve the value
  reverse(arr, 0, size - 1); // reverse the whole array   // O(n)
  reverse(arr, 0, k - 1); // reverse the first k elements --> k-1 as index starts from 0  // O(k)
  reverse(arr, k, size - 1); // reverse the last k elements // O(n-k)

  return arr;
}

// function to reverse
function reverse(arr, start, end) {
  while (start < end) {
    //   just swap the start & end or left & right
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

console.log(rotatArrayOptimised([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotatArrayOptimised([-1, -100, 3, 99], 2));

// Time Complexity --> O(n)
// Space Complexity --> O(1)
