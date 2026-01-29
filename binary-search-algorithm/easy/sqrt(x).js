/**
 * https://leetcode.com/problems/sqrtx/description/
 * 69. Sqrt(x)
Easy
Topics
premium lock icon
Companies
Hint
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  return Math.trunc(x ** 0.5);
};


/** 2. USing Linear search */
// Time Complexity: O(n/2) = O(n)

// Space Complexity: O(1)




/** 3. Using Binary Search */

// The maths: The sqrt of a number will always lie bw 2 and the number/2 - it can never exceed that

/**
 * The algorithm 
 * run the loop from 2 to x/2
 * find mid ele = m
 * if(x< square(m))
 *  r= m-1
 * else 
 *  l = m+1
 * 
 * uptill up, is pefect for perfect sqaures
 * if not , right wil be the closest to the perfect square , so we will have to return that
 */



/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x


    let l = 2;
    let r = Math.ceil(x / 2)

    while (l <= r) {
        let m = Math.ceil((l + r) / 2)
        if (x === m * m) {
            return m
        } else if (x > m * m) {
            l = m + 1
        } else {
            r = m - 1
        }
    }

    return r;

};


// Time Complexity: O(logx)

// Space Complexity: O(1)