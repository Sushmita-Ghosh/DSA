/**
 * Delete data and key from object
Easy

Write a program where given an object and a key, delete the key and its corresponding value from the object.

Example 1:

Input: obj = { "name": "John", "age": 10, "city": "NewYork" }, key = "age" 
Output: {"city":"NewYork","name":"John"}
Explanation: 
 */

function deleteKey(obj, key) {
  // Your code goes here
  delete obj[key];
  return obj;
}

console.log(deleteKey({ name: "John", age: 10, city: "NewYork" }, "age"));

// let obj = { name: "John", age: 10, city: "NewYork" };
// delete obj["age"];
// console.log(obj);
