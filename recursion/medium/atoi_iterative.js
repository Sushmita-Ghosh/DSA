// https://www.youtube.com/watch?v=tGig69EW7F4

// https://leetcode.com/problems/string-to-integer-atoi/

// Steps:
// 1. Remove all leading whitespaces
// 2. We will check for the leading sign - whether it is positive or negative
// 3. Next we will start from the next index and take till we get a charCode which does not lies from charCode of 0-9
// 4. Convert the string to number and add sign to it
// 5.Check for the number if it is greater than 2^31 - 1 or less than -2^31
// 6. Return the number

var myAtoi = function (s) {
  // Remove all leading whitespaces
  s = s.trimStart();

  // max & min range
  const max32Bit = 2 ** 31 - 1;
  const min32Bit = -(2 ** 31);

  // char codes of 0 & 9
  const zeroCharCode = "0".charCodeAt(0);
  const nineCharCode = "9".charCodeAt(0);

  let result = "0";
  let sign = 1;
  let idx = 0;

  // check for the leading sign
  // if the first character is -
  if (s[0] === "-") {
    sign = -1;
    idx++;
  } else if (s[0] === "+") {
    idx++;
  }

  // start from the next index and take till we get a charCode which does not lies from charCode of 0-9
  for (let i = idx; i < s.length; i++) {
    const charCode = s[i].charCodeAt(0);

    if (charCode < zeroCharCode || charCode > nineCharCode) {
      break;
    }

    // remove leading zeros - if zero we will only keep it as s[i]
    //  else we will append to result
    result = result === "0" ? s[i] : result + s[i];
  }

  // adding sign +result will give us the number
  result = +result * sign;

  // check for the number if it is greater than 2^31 - 1 or less than -2^31
  if (result > max32Bit) {
    result = max32Bit;
  }
  if (result < min32Bit) {
    result = min32Bit;
  }

  return result;
};

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));

// parseInt will do the exact job -
// the only difference is that if does not get a number at start it will return NaN

var myAtoi = function (s) {
  const max32Bit = 2 ** 31 - 1;
  const min32Bit = -(2 ** 31);
  let num = parseInt(s);
  if (isNaN(num)) return 0;
  if (num > max32Bit) return max32Bit;
  if (num < min32Bit) return min32Bit;
  return num;
};
