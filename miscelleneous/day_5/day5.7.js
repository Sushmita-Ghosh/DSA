/**
 * Answer: Use the JavaScript some() Method
You can use the JavaScript some() method to find out if a JavaScript array contains an object.

This method tests whether at least one element in the array passes the test implemented by the provided function. 
Here's an example that demonstrates how it works:
var persons = [{name: "Harry"}, {name: "Alice"}, {name: "Peter"}];

// Find if the array contains an object by comparing the property value
if(persons.some(person => person.name === "Peter")){
    alert("Object found inside the array.");
} else{

 */

// Find a item in a list of objects

// Write a program which takes a list of objects and a target item, find the object in the list that matches the target item.

// Example 1:

// Input: list = [{ "name": "John", "value": "Doe" }, { "name": "Jane", "value": "Smith" }], target = {"name":"Jane","value":"Smith"}
// Output: {"name":"Jane","value":"Smith"}
// Explanation:

function findItemInList(list, target) {
  // Your code goes here
  let element = list.find(
    (item) => JSON.stringify(item) === JSON.stringify(target)
  );
  console.log(element);
}

console.log(
  findItemInList(
    [
      { name: "John", value: "Doe" },
      { name: "Jane", value: "Smith" },
    ],
    { name: "Jane", value: "Smith" }
  )
);

console.log(
  findItemInList(
    [
      { name: "John", value: "Doe" },
      { name: "Jane", value: "Smith" },
    ],
    { name: "Jane", value: "Ghosh" }
  )
);
