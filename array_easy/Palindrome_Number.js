var isPalindrome = function (x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

// if the number is negative it has to be 0
// The "+" converts the string to number if possible else return "NaN"

// https://leetcode.com/problems/palindrome-number/
// https://www.youtube.com/watch?v=0kafYiWEVpU&list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4&index=3
