// https://leetcode.com/problems/valid-anagram/

/**
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 */

// Method 1 --> sort the array & compare them

var isAnagram = function (s, t) {
  s = s.split("").sort().join(""); // anagram => [a,n,a,g,r,a,m] => ["a","a","a","g","m" "n","r"] => "aaagmnr"
  t = t.split("").sort().join(""); //nagaram => [n,a,g,a,r,a,m] => ["a","a","a","g","m" "n","r"] => "aaagmnr"

  return s === t;
};

// Using objects

var isAnagram = function (s, t) {
  //   edge cases --> if length is not same
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1; // if the letter is not in the object, set it to 0+1 or +1 to it
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  // if the keys are not same
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

/***
 *  make two objects and check if they are equal
 *
 *  rat - tar
 *
 * {
 *  r: 1
 *  a: 1
 *  t: 1
 *  }
 *
 * {
 *  t:1
 *  a:1
 *  r: 1
 * }
 *
 */
