//leetcode.com/problems/missing-number/

var missingNumber = function (nums) {
  // get max number
  let n = nums.length;

  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// Using sum formula

var missingNumber = function (nums) {
  let n = nums.length;
  // finding the range of n  & sum of n natural numbers
  let sum = (n * (n + 1)) / 2;

  for (e of nums) {
    sum -= e;
  }

  return sum;
};
