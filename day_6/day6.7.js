// //Iteration on object
// Easy
// Marks Available: 20.00
// Rank: 15
// Score: 60.0
// Write a function in that takes an object and returns a new object that contains only the properties of the original object that have a value of type 'string'.

// Example 1:

// Input: obj = {"name": "John", "age": 30, "city": "NewYork", "job": "Developer"}
// Output: {"city":"NewYork","job":"Developer","name":"John"}
// Explanation:

function onlyStringProperties(obj) {
  // Your code goes here
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      newObj[key] = value;
    }
  }
  return newObj;

  // next leap
  // let newObj = {};
  //     for (let key in obj) {
  //         if (typeof obj[key] === 'string') {
  //             newObj[key] = obj[key];
  //         }
  //     }
  //     return newObj;	}
}

console.log(
  onlyStringProperties({
    name: "John",
    age: 30,
    city: "NewYork",
    job: "Developer",
  })
);
