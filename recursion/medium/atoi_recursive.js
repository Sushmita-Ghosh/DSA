// https://www.youtube.com/watch?v=bYE9UkP32cg
// https://www.geeksforgeeks.org/recursive-implementation-of-atoi/

/**
 *  Explanation ->
 *
 *  We will start from last index then one by one we will each time multiply the result by 10 and add the last digit to it
 *  till we reach the first digit and then return the return 0
 */

function atoiRecursive(str, n) {
  //      If str is NULL or str contains non-numeric
  // characters then return 0 as the number is not
  // valid
  if (str.match(/^[A-Za-z]+$/)) {
    return 0;
  }

  // when only 1 digit is left --> last digit --> return it
  if (n == 1) {
    return str[0].charCodeAt() - "0".charCodeAt();
  }

  // If more than 1 digits, recur for (n-1),
  // multiply result with 10 and add last digit
  return 10 * atoiRecursive(str, n - 1) + str[n - 1] - "0".charCodeAt();
}

// Each time we need to substract '0'.charCodeAt() from the last digit to get the actual digit between 0 --> 9

// Time complexity: O(n),
// Auxiliary Space: O(n)

// 121
// 10 * atoiRecursive("121", 3) + 1 --> return 121 (10*12 + 1)
// 10 * atoiRecursive("12", 2) + 2 --> return 12 (10*1 + 2)
// n==0  --->  return 1
