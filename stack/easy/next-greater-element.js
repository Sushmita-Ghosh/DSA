/**
 * https://leetcode.com/problems/next-greater-element-i/description/
 * 496. Next Greater Element I
 */

/**
 * LOGIC: Brute Force
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * 
 * Description

This function finds the next greater element for each value in nums1 based on its position in nums2.

For every element in nums1, the function:

1.Locates the same element in nums2.
2.Looks to the right of that position in nums2.
3. Finds the first number that is greater than the current element.
4. If such a number exists, it is added to the result array.
5. If no greater number is found, -1 is added instead.

The function repeats this process for all elements in nums1 and returns the resulting array.
 */

var nextGreaterElement = function (nums1, nums2) {
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    let flag = false;
    for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        ans.push(nums2[j]);
        flag = true;
        break;
      }
    }
    if (!flag) {
      ans.push(-1);
    }
  }
  return ans;
};

/**
 * USING STACK
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, arr) {
  let n = arr.length;
  let stack = [];
  let ngeMap = {};

  /** 1. the nge for last element is always -1 */
  stack.push(arr[n - 1]);
  ngeMap[arr[n - 1]] = -1;

  for (let i = n - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];
    /** 2. If arr[i] < top then nge is the top */
    if (arr[i] < top) {
      ngeMap[arr[i]] = top;
    } else {
      while (stack.length) {
        /** 3 if not, we will keep popping from stack untill we find nge & break */
        if (arr[i] < stack[stack.length - 1]) {
          ngeMap[arr[i]] = stack[stack.length - 1];
          break;
        } else {
          stack.pop();
        }
      }
      if (stack.length === 0) {
        /** we reached the end of the stack and did not find the nge */
        ngeMap[arr[i]] = -1;
      }
    }
    stack.push(arr[i]);
    /** once we find nge we need to push arr[i] into stack as well */
  }

  /** 5. We need to return the ans */
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans.push(ngeMap[nums1[i]]);
  }

  return ans;
};



/** Optimizing */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, arr) {
    let n = arr.length
    let stack = []
    let ngeMap = {}

    /** 1. the nge for last element is always -1 */
    stack.push(arr[n - 1])
    ngeMap[arr[n - 1]] = -1


    for (let i = n - 2; i >= 0; i--) {
        let top = stack[stack.length - 1];
        while (stack.length) {
            /** 3 if not, we will keep popping from stack untill we find nge & break */
            if (arr[i] < stack[stack.length - 1]) {
                ngeMap[arr[i]] = stack[stack.length - 1]
                break
            } else {
                stack.pop()
            }
        }
        if (stack.length === 0) {
            /** we reached the end of the stack and did not find the nge */
            ngeMap[arr[i]] = -1
        }
        stack.push(arr[i])
        /** once we find nge we need to push arr[i] into stack as well */
    }


    /** 5. We need to return the ans */
    return nums1.map(x => ngeMap[x])
};