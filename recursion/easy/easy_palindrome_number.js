// Iterative

function palindrome(num) {
  let str = num.toString();
  let rev = str.split("").reverse().join("");
  return str === rev;
}

// Recursive
// Explanation
// Each time we are comparing first and last of the array
// and reducing from front and back
// till it reaches length of 2 --> for even
// till it reaches length of 1 --> for odd

function checkPalindrome(num) {
  let str = num.toString();
  console.log(str);
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return checkPalindrome(str.slice(1, -1));
  return false;
}

console.log(checkPalindrome(12121));
// palindrome(12121)
// palindrome(212)
//
