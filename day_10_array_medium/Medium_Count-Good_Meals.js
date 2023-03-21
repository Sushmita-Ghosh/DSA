// // Count Good Meals

// https://www.youtube.com/watch?v=1sHkfaryP3w

// A good meal is a meal that contains exactly two different food items with a sum of deliciousness equal to a power of two.

// You can pick any two different foods to make a good meal.

// Given an array of integers deliciousness where deliciousness[i] is the deliciousness of the i​​​​​​th​​​​​​​​ item of food, return the number of different good meals you can make from this list modulo
// 1
// 0
// 9
// +
// 7
// 10
// 9
//  +7.

// Note that items with different indices are considered different even if they have the same deliciousness value.

// Example 1:

// Input: deliciousness = [1,3,5,7,9]
// Output: 4
// Explanation: The good meals are (1,3), (1,7), (3,5) and, (7,9).

// Their respective sums are 4, 8, 8, and 16, all of which are powers of 2.
// Example 2:

// Input: deliciousness = [1,1,1,3,3,3,7]
// Output: 15
// Explanation: The good meals are (1,1) with 3 ways, (1,3) with 9 ways, and (1,7) with 3 ways.

var countPairs = function (arr) {
  let pow = []; // will contain all power of two array
  let ans = 0; //
  let p = 1;

  const mod = 1e9 + 7; // given in the question

  pow.push(1);
  for (let i = 1; i <= 21; i++) {
    p = p * 2;
    pow.push(p);
  }

  let map = new Map();

  for (let ele of arr) {
    for (let po of pow) {
      // if the array has the other complement from 2
      if (map.has(po - ele)) ans += map.get(po - ele);
    }

    map.set(ele, map.get(ele) + 1 || 1); // agar ele nahi hai map me toh map me element daalo || agar hai to bdhao
  }

  return ans % mod;
};

class Solution {
  /**
   * @param {number[]} deliciousness
   * @return {number}
   */
  countPairs(arr) {
    let pow = []; // will contain all power of two array
    let ans = 0; //
    let p = 1;

    const mod = 1e9 + 7;

    pow.push(1);
    for (let i = 1; i <= 21; i++) {
      p = p * 2;
      pow.push(p);
    }

    let map = new Map();

    for (let ele of arr) {
      for (let po of pow) {
        if (map.has(po - ele)) ans += map.get(po - ele);
      }

      map.set(ele, map.get(ele) + 1 || 1);
    }

    return ans % mod;
  }
}

/**
 * 
 * @param {9


This is (kind of?) clever use of the tilde (~) operator, but it just leads to confusion. The ~ (effectively) adds one to the number and flips the sign.

~0 === -1

~1 === -2

~-1 === 0

etc.

The - flips the sign back to what it originally was.

So the end result of -~j is j + 1

This then gets added to a[i] and assigned to y

Moral of the story: don't ever write code like this.

Note: There are legitimate use-cases for the ~ operator, most notably in the .indexOf() function. If you want to check if something was found in an array/string, rather than saying:

if (arr.indexOf("foo") > -1) {...}, you can say

if (~arr.indexOf("foo")){...}. This is because if the value is not found, indexOf() will return -1, which, when passed through the tilde operator, will return 0, which coerces to false. All other values return 0 through n, which return -(1 through n+1) when passed through the tilde operator, which coerce to true.} dd 
 * @returns 
 */

var countPairs = function (dd) {
  let powers = [];
  for (let i = 0; i < 22; i++) powers.push(1 << i);
  let dels = new Map();
  let total = 0;
  let mod = 1e9 + 7;
  for (let d of dd) {
    for (let p of powers) {
      total += dels.get(p - d) || 0;
    }
    dels.set(d, -~dels.get(d));
    total = total % mod;
  }
  return total;
};

// console.log(countPairs([1, 3, 5, 7, 9]));
console.log(countPairs([1, 1, 1, 3, 3, 3, 7]));

// 0(21*n) -> 21n -> O(n)
// space o(n)

// nextLeap

// Below are few approaches.

// Approach 1: Using Map
// Intuition

// Use the similar approach of two sum problem using hashmap

// We just need to maintain a hashmap and for each element a in map try to find
// if there is another element of type 2^k-a. k lies from 0 to 22 from the input range.

// Algorithm

// Because there are only 22 possible outcomes (i.e.1,2,4,8,...,2^21 ),
// we just have to iterate through all of them and query from the hashmap.

// There is two or maybe three edge cases.

// Int overflown - Use long to prevent this. The question asked us to mod 1e9 + 7, don't forget.
// There are 22 possible outcomes, not 21, because 2^20+2^20 = 2^21
// A power of 2 adds themsevles forms another power of 2,
// so in that case, we have to choose 2 from the pile, i.e. n * (n - 1) / 2.

class Solution {
  /**
   * @param {number[]} deliciousness
   * @return {number}
   */
  countPairs(deliciousness) {
    let sqr = [];
    const complement = new Map();
    let MOD = 10 ** 9 + 7;

    let res = 0;
    for (let rate of deliciousness) {
      for (let i = 21; i >= 0; i--) {
        let sqr = 2 ** i;
        if (sqr - rate < 0) break;
        if (complement.has(sqr - rate)) {
          res += complement.get(sqr - rate);
        }
      }
      complement.set(rate, complement.get(rate) + 1 || 1);
    }

    return res % MOD;
  }
}
// Time Complexity: O(22∗N)

// Space Complexity: O(N) To store fequency of each number.
