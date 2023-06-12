// Rest Operator II
/**
 * Write a function removeKeys that takes an object and an indefinite number of keys as arguments and returns a new object with the specified keys removed.

Example 1:

Input: obj = {"Kohli": 18,  "Sachin": 10, "Dhoni": 7, "Rohit": 45, "Gayle": 333}, keys = ["Rohit", "Gayle"] 
Output: {"Dhoni":7,"Kohli":18,"Sachin":10}
 */

function removeKeys(obj, ...keys) {
  // Your code goes here
  for (let i of keys) {
    delete obj[i];
  }
  return obj;
}
