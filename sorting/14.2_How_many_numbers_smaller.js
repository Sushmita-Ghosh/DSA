// How Many Numbers Are Smaller Than the Current Number
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

var smallerNumbersThanCurrent = function (nums) {
  let smallerNumbersArray = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] !== nums[j] && nums[j] < nums[i]) {
        count++;
      }
    }
    smallerNumbersArray.push(count);
  }
  return smallerNumbersArray;
};

const arr = smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
console.log(arr);

//  from leetcode - acc keeps track of count - brilliant solution - o(n)
var smallerNumbersThanCurrent = function (nums) {
  return nums.map((item) =>
    nums.reduce((acc, val) => (val < item ? acc + 1 : acc), 0)
  );
};

//
/**
 * O(1) - Excellent/Best
O(log n) - Good
O(n) - Fair
O(n log n) - Bad
O(n^2), O(2^n) and O(n!) - Horrible/Worst
 */
