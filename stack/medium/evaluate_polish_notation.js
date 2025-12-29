/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 */

/**
 * Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 */

/**
 * Logic -
 * 1. run a loop from 0 to n-1
 * 2. if the element is a number, push it to the stack
 * 3. if the element is an operator, pop two elements from the stack and perform the operation
 * 4. push the result to the stack
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(tokens[i])) {
      /** if its a number */
      stack.push(Number(tokens[i]));
    } else {
      let operator = tokens[i];
      let a = stack.pop();
      let b = stack.pop();

      /** evaluate a operator b */
      switch (operator) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = b - a;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = Math.trunc(b / a);
          break;
      }
      /** push the result to stack */
      stack.push(result);
    }
  }
  return parseInt(stack.pop());
};

/** Using Eval */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  for (let token of tokens) {
    // check if token is operator if(token === "+" || token === "-" || token === "*" || token === "/")
    if (["+", "-", "*", "/"].includes(token)) {
      // operator logic FIRST
      let a = stack.pop();
      let b = stack.pop();
      let result = eval(`${b} ${token} ${a}`);

      stack.push(Math.trunc(result)); // don't forget to add space as it is a operation
    } else {
      // otherwise push number
      stack.push(Number(token));
    }
  }

  return Number(stack.pop());
};

/** Using MAP */

var evalRPN = function (arr) {
  let stack = [];
  const map = {
    "+": (a, b) => b + a,
    "*": (a, b) => b * a,
    "-": (a, b) => b - a,
    "/": (a, b) => Math.trunc(b / a),
  };
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      let a = stack.pop();
      let b = stack.pop();
      let ans = map[arr[i]](+a, +b); // +a  adding + will convert string to number
      stack.push(ans);
    } else {
      stack.push(arr[i]);
    }
  }
  return Number(stack.pop());
};
