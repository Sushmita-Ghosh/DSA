/**
 * https://leetcode.com/problems/remove-outermost-parentheses/description/
 * Algorithm:
 *
 * 1. if opening bracket is encountered push it into stack
 * 2. if closing bracket is encountered pop it from stack
 * 3. after pushing check length - if length > 1 add it to answer string
 * 4. after popping check length - if length > 1 add it to answer string
 * 5. return answer
 */

JavaScript;
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  /** Using stack */
  let stack = [];
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    /** if opening brackect push  & check the length*/
    if (s[i] == "(") {
      stack.push(s[i]);
      /** check length */
      ans = ans + (stack.length > 1 ? s[i] : "");
    } else {
      /** if it's a closing bracket - check length first then pop */
      /** check length */
      ans = ans + (stack.length > 1 ? s[i] : "");
      stack.pop();
    }
  }

  return ans;
};

/** WITHOUT STACK */
/**
 * 
 * Time Complexity:
Time Complexity = O(n)

Space Complexity:
Space Complexity = O(1) => we dont use any extra space (ans does take 0(n) space , but extra space is O(1) so overall space complexity is O(1))
 */

var removeOuterParentheses = function (s) {
  /** Using stack */
  let level = 0;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    /** if opening brackect increment level & check the length*/
    if (s[i] == "(") {
      level++;
      /** check length */
      ans = ans + (level > 1 ? s[i] : "");
    } else {
      /** if it's a closing bracket - check length first then decrement */
      /** check length */
      ans = ans + (level > 1 ? s[i] : "");
      level--;
    }
  }

  return ans;
};

var removeOuterParentheses = function (s) {
  /** Using stack */
  let level = -1;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    /** if opening brackect increment level & check the length*/
    if (s[i] == "(") {
      level++;
      /** check length */
      ans = ans + (level ? s[i] : "");
    } else {
      /** if it's a closing bracket - check length first then decrement */
      /** check length */
      ans = ans + (level ? s[i] : "");
      level--;
    }
  }

  return ans;
};
