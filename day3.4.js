// Convert number into words
// https://www.geeksforgeeks.org/program-to-convert-a-given-number-to-words-set-2/
//https://www.youtube.com/watch?v=JEz9jXxWavo
/**
 * 
 * You are given a positive integer n (0 ≤ n ≤ 10^9). Your task is to write a function convertToWords to convert this number into words.

Write a function convertToWords to solve the problem. This function should take in the following argument:
Example 1:

Input: n = 12 
Output: twelve
Explanation: 
Example 2:

Input: n = 1 
Output: one
Explanation: 
 */

// function convertToWords(n) {
//   // Your code goes here
//   var one = [
//     "",
//     "one ",
//     "two ",
//     "three ",
//     "four ",
//     "five ",
//     "six ",
//     "seven ",
//     "eight ",
//     "nine ",
//     "ten ",
//     "eleven ",
//     "twelve ",
//     "thirteen ",
//     "fourteen ",
//     "fifteen ",
//     "sixteen ",
//     "seventeen ",
//     "eighteen ",
//     "nineteen ",
//   ];

//   return one[n % 100];
// }

// console.log(convertToWords(12));

/**
 * /* Javascript program to
 print a given number in words.
 The program handles till 9
 digits numbers and
can be easily extended to
20 digit number */

// Strings at index 0 is not used, it is to make array
// indexing simple
var one = [
  "",
  "one ",
  "two ",
  "three ",
  "four ",
  "five ",
  "six ",
  "seven ",
  "eight ",
  "nine ",
  "ten ",
  "eleven ",
  "twelve ",
  "thirteen ",
  "fourteen ",
  "fifteen ",
  "sixteen ",
  "seventeen ",
  "eighteen ",
  "nineteen ",
];

// Strings at index 0 and 1 are not used, they are to
// make array indexing simple
var ten = [
  "",
  "",
  "twenty ",
  "thirty ",
  "forty ",
  "fifty ",
  "sixty ",
  "seventy ",
  "eighty ",
  "ninety ",
];

// n is 1- or 2-digit number
function numToWords(n, s) {
  var str = "";
  // if n is more than 19, divide it
  if (n > 19) {
    str += ten[parseInt(n / 10)] + one[n % 10];
  } else {
    str += one[n];
  }

  // if n is non-zero
  if (n != 0) {
    str += s;
  }

  return str;
}

// Function to print a given number in words
function convertToWords(n) {
  // stores word representation of given number n
  var out = "";

  // handles digits at ten millions and hundred
  // millions places (if any)
  out += numToWords(parseInt(n / 10000000), "crore "); // 43, crore

  // handles digits at hundred thousands and one
  // millions places (if any)
  out += numToWords(parseInt((n / 100000) % 100), "lakh "); // 82. lakh

  // handles digits at thousands and tens thousands
  // places (if any)
  out += numToWords(parseInt((n / 1000) % 100), "thousand "); //37 thousand

  // handles digit at hundreds places (if any)
  out += numToWords(parseInt((n / 100) % 10), "hundred "); //7 hundered

  if (n > 100 && n % 100 > 0) {
    out += "and ";
  }

  // handles digits at ones and tens places (if any)
  out += numToWords(parseInt(n % 100), "");

  return out;
}

// Driver code
// var handles upto 9 digit no
// change to unsigned var var var to
// handle more digit number
var n = 12;

// convert given number in words
console.log(convertToWords(n));

// This code is contributed by Amit Katiyar

/**
 * var one = [
  "",
  "one ",
  "two ",
  "three ",
  "four ",
  "five ",
  "six ",
  "seven ",
  "eight ",
  "nine ",
  "ten ",
  "eleven ",
  "twelve ",
  "thirteen ",
  "fourteen ",
  "fifteen ",
  "sixteen ",
  "seventeen ",
  "eighteen ",
  "nineteen ",
];

var ten = [
  "",
  "",
  "twenty ",
  "thirty ",
  "forty ",
  "fifty ",
  "sixty ",
  "seventy ",
  "eighty ",
  "ninety ",
];

function numToWords(n, s) {
  var str = "";
  // if n is more than 19, divide it
  if (n > 19) {
    str += ten[parseInt(n / 10)] + one[n % 10];
  } else {
    str += one[n];
  }

  // if n is non-zero
  if (n != 0) {
    str += s;
  }

  return str;
}

function convertToWords(n) {
  var out = "";
  out += numToWords(parseInt(n / 10000000), "crore "); // 43
  out += numToWords(parseInt((n / 100000) % 100), "lakh "); // 82
  out += numToWords(parseInt((n / 1000) % 100), "thousand ");
  out += numToWords(parseInt((n / 100) % 10), "hundred ");

  if (n > 100 && n % 100 > 0) {
    out += "and ";
  }
  out += numToWords(parseInt(n % 100), "");

  return out;
}
 */

// nextleap solution

/**
 *
 *  class Solution {
	
	//  * @param {number} n
	//  * @return {string}
	 
	convertToWords(n) {
		let n1 = n, n2 = n;
    let b = n1 % 10, a = Math.floor(n2 / 10);

    let single_digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let two_digits = ["", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens_multiple = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (a === 1) {
        return two_digits[b + 1];
    } else if (b === 0) {
        return tens_multiple[a];
    } else {
        return tens_multiple[a]  + single_digits[b];
    }
	}
};
 */
