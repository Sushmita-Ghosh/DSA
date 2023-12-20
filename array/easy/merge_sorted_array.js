// <!-- https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150 -->

// <!-- Brute Force Approach -->

/**
 *  1. merge the two arrays
 *  2. sort the array
 */

var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums1.push(...nums2);
  nums1.sort();
};

var mergeBruteForce = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  nums1.sort((a, b) => a - b);
  console.log(nums1);
};

console.log(mergeBruteForce([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(mergeBruteForce([1], 1, [], 0));
console.log(mergeBruteForce([0], 0, [1], 1));

// Time Complexity: O((m+n)log(m+n))
// Space Complexity: O(1)

// Optimized Approach
// Two Pointer Approach
/**
 *  1. Two pointers first and second -> first to m-1 and second to n-1
 *  2  i = nums1.length-1 // m+n-1
 *  3. we will compare the values of nums1[first] and nums2[second] and put the greater value in nums1[i]

 */
// https://www.youtube.com/watch?v=73lyz0EZye8

var mergeOptimized = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  // while the second array still has values and first has not yet reached the end.
  while (i >= 0 && j >= 0) {
    if (num1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }

  // whoever finishes first copy the rest of the values
  while (i >= 0) {
    nums1[k] = nums1[i];
    k--;
    i--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
};

// Time Complexity: 0(m + n)
// Space Complexity: O(1)
