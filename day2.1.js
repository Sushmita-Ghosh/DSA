/**
 * Remove MR prefix from the list of words (if any)
 * Write a program to remove "MR" prefix from a list of words

Example 1:

Input: arr =  ["MR John", "MR Smith", "Mike"] 
Output: ["John", "Smith", "Mike"]
Explanation: 
 */

function removeMR(arr) {
  // Your code goes here
  const removeMRArray = arr.map((str) =>
    str.includes("MR") ? str.slice(3) : str
  );
  return removeMRArray;
}

console.log(removeMR(["MR John", "MR Smith", "Mike"]));
