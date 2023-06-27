// we will create a parens -> which will store all the parens values -> (), [], {} eta string
// we will have a stacj jo hamesha two values check if they are included in parens string
// then pop
// or else
// ye stack rakhna for storing the two values at a time

// time compl - o(n)
// space - o(n)

// https://leetcode.com/problems/valid-parentheses/

// https://www.youtube.com/watch?v=HhBo1fckgBM

var isValid = function (s) {
  const stack = [];
  const parens = "() {} []"; // here space is important otherwise we will consider strings
  // like (] which are substrings but not the condition
  let i = 0;

  while (i < s.length) {
    // we will push into stack to check
    stack.push(s[i]);
    i++;

    // we will then check the last two elements
    let openBracket = stack[stack.length - 2];
    let closedBracket = stack[stack.length - 1];

    let potentialParens = openBracket + closedBracket; // () or [] or {}  --> concatenating these

    console.log(potentialParens);

    if (parens.includes(potentialParens)) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0; // if stack is empty that means all brackects are matched
  //   or else  there are brackets we did not find the matching pair - we return false
};

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("{()}"));
