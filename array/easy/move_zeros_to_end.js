// Given an integer array nums, move all 0's to the end of it while maintaining the
// relative order of the non - zero elements.

// Note that you must do this in-place without making a copy of the array.

//  https://leetcode.com/problems/move-zeroes/

// Example 1:

// Input: nums = [0,1,0,3,12]  --> [1,0,3,12]
// Output: [1,3,12,0,0]

//if you start from the beginning, while going to the end its always 0's and the loops never ends.

var moveZeroes = function (nums) {
  let size = nums.length;

  for (let i = size; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

// time:O(n)
// space:O(1)

// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 1, 0, 3, 12]));

// Without JS Menthods - Two pointer

var moveZeroesSecond = function (nums) {
  // [2,1] --> for this case we need to ensure at least i should be zero then only swap

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
  return nums;
  // let i = 0;
  // for (let j = 1; j < nums.length; j++) {
  //   if (nums[j] !== 0) {
  //     let temp = nums[i];
  //     nums[i] = nums[j]; // change the values of nums[i] & nums[j] // swap
  //     nums[j] = temp;
  //     i++;
  //   }
  // }
  // return nums;
};

console.log(moveZeroesSecond([0, 1, 0, 3, 12]));
console.log(moveZeroesSecond([0, 1, 0, 3, 12]));




/**
 * My solution
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let k =0 // contain the pos where we need to fill next non zero number
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==0){
            nums[k]=nums[i]
            k++;
        }
    }

  
    // if(k<nums.length){
    //     for(i=k; i<nums.length; i++){
    //         nums[k]=0
    //         k++;
    //     }
    // }

      /** Once the array traversal ends  for the rest fill with 0 */
    for(let i =k; i<nums.length; i++){
      nums[i]=0
    }
};