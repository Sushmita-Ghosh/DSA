/**
 * Maximum Product of Two Elements in an Array
Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

 

Example 1:

Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
Example 3:

Input: nums = [3,7]
Output: 12
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] - 1) * (nums[j] - 1) > max) {
        max = (nums[i] - 1) * (nums[j] - 1);
      }
    }
  }
  return max;
}

console.log(maxProduct([3, 7]));
console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([1, 5, 4, 5]));

// using sorting - agar desc order me sort kr lein toh? - always phle dono k hi product sbse jyada hoga

var maxProduct = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let i = nums.length - 2;
  let j = nums.length - 1;
  combined = (nums[i] - 1) * (nums[j] - 1);
  return combined;
};

/**
 * Solution
Approach 1: 
�
(
�
)
O(n) solution

The idea is to find the largest two elements from an array . 
We will get the maximum product only when the both the elements are maximum possible from an array. 
To find the max1 and max2 (max1 -largest element , max2-second largest element). 
Initialize max1 and max2 with minimum value . Run a loop from 0 to n-1 check.

if the element present at index is greater than max1 update the max2 with max1 and max1 with the current index element.
if the element is present at index is greater than max2 update max2 with the current index element . 
Finally return ans by (max1-1)*(max2-1)
Python 3
C++
Java
JavaScript

function maxProduct(nums) {
        let max1=0,max2=0;
        for(let i=0;i<nums.length;i++)
        {
            if(nums[i]>max1)
            {
                max2=max1;
                max1=nums[i];
            }
            else if(nums[i]>max2)max2=nums[i];
        }
        return (max1-1)*(max2-1);
};
Time Complexity - 
�
(
�
)
O(n) Space Complexity - 
�
(
1
)
O(1)
 */
