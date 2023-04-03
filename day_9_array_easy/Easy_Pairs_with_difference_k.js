// Count Number of Pairs With Absolute Difference K
// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

// Brute Force - o(n^2)

// var countKDifference = function (nums, k) {
//   let n = nums.length;
//   let ans = 0;

//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (Math.abs(nums[i] - nums[j]) === k) ans++;
//     }
//   }

//   return ans;
// };

var countKDifference = function (nums, k) {
  let n = nums.length;
  let res = 0;

  let map = new Map();

  for (let i = 0; i < n; i++) {
    let hi = nums[i] + k; // dono complemet hi seach krni hai
    let lo = nums[i] - k;
    if (map.has(hi)) {
      res += map.get(hi);
    }
    if (map.has(lo)) {
      res += map.get(lo);
    }
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }

  console.log(map);
  return res;
};

console.log(countKDifference([1, 2, 2, 1], 1));

//  same hashmap with

/**
 * Time complexity: O(N)
Space complexity: O(N)
 */

// Can be done using sliding window technique
