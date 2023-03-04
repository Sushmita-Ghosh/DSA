// Rest Operator I
/**
 * Write a function sortByLength that takes an indefinite number of strings as arguments and returns an array of these strings sorted by their length in ascending order.

Example 1:

Input: strings = ["Kohli", "Sachin", "MSD", "Lara"] 
Output: ["MSD", "Lara", "Kohli", "Sachin"]
Explanation: 
 */

function sortByLength(...strings) {
  // Your code goes here
  let b = strings.sort((a, b) => a.length - b.length);
  return b;
}
