// Palindrome --> number = rev
  // if the number is negative it has to be 0
  // The "+" converts the string to number if possible else return "NaN"
  
  // https://leetcode.com/problems/palindrome-number/

  var isPalindrome = function (x) {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
  };
  