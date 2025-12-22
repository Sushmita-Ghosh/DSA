/**
 * 
 * 20. Valid Parentheses
 * 
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

/** Logic -
 *  For the whole length of the stric=ng
 *
 * 1. if opening brackect push into stack
 * 2, if closing brackect , check it to the last elelement of the stack,, if match then pop it
 *
 * Edge case - [()]}
 * 1. if while pushing we find the stack is empty then return false
 * 2. If length of the stack is 1 then return false (can never be balanced - at least 2 elements required)
 */

// 1. FIRST SOLUTION
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  /** EDGE CASE */
  if (s.length === 1) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      // opening bracket - push
      stack.push(s[i]);
    } else {
      let top = stack.pop(); // get the top element

      /** if the stack is empty then top is undefined - we need to retun false -
            as the string is not finished */
      /** if any of opn-close combo doesnot match then also return false */
      if (
        !top ||
        (top === "(" && s[i] !== ")") ||
        (top === "{" && s[i] !== "}") ||
        (top === "[" && s[i] !== "]")
      ) {
        return false;
      }
    }
  }

  /** if stack is empty by the end of the whole operation , retun true */
  return stack.length === 0;
};

/** OPTIMISED
 *  Using MAP OF OPENING AND CLOSING BRACKETS
 *
 */

/**
 * 
 Time complexity: O(n)
Space complexity: O(n) - > only for the stack, the map is constant so no extra space
 */
var isValid = function (s) {
  const stack = [];

  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  /** EDGE CASE */
  if (s.length === 1) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    // if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
    if (map[s[i]]) {
      // opening bracket - push
      stack.push(s[i]);
    } else {
      let top = stack.pop(); // get the top element
      /** if the closing bracket doesnot match the map then return false */
      if (!top || map[top] !== s[i]) {
        return false;
      }
    }
  }

  /** if stack is empty by the end of the whole operation , retun true */
  return stack.length === 0;
};
