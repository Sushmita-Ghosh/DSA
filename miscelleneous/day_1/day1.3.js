// https://www.geeksforgeeks.org/frequent-element-array/
/**]
 * Write a program to find the most frequent element in an array of integers and return the count of its occurrence.

Example 1:

Input: arr = [1,2,3,2,2,5] 
Output: 3
Explanation: 
Constraints:
10^−4 <arr[i]<10^4
0<arr.length<10^3
 */

function mostFrequent(arr) {
  // Your code goes here
  // done by sorting -> first sort the array
  arr.sort(); //[1,2,2,2,3,5]
  let max_count = 1,
    curr_count = 1,
    res;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      // arr[1] === arr[0]
      curr_count++;
    }

    if (curr_count > max_count) {
      max_count = curr_count;
      res = arr[i - 1]; // i already got implemented
    }
  }

  return res;
}

console.log(mostFrequent([1, 2, 3, 2, 2, 5])); // 2
console.log(mostFrequent([1, 1, 2, 3, 5])); // 1
console.log(mostFrequent([1, 1, 2, 3, 3, 5])); // 3 (duplicates need to store in an array)
