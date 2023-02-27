// Calculate total score in a list of object
/**
 * Given a list of objects, each object representing a student and their scores, write a function to calculate the total score of all students.

Example 1:

Input: students = [{"name": "John", "scores": [90, 85, 80]}, {"name": "Jane", "scores": [95, 90, 85]}, {"name": "Bob", "scores": [80, 85, 90]}] 
Output: [255, 270, 255]
Explanation:
 */

function calculateTotalScore(students) {
  // Your code goes here
  return students.map((ele) => {
    return ele.scores.reduce((acc, item) => (acc += item), 0);
  });
  //return students.map(student => student.scores.reduce((acc, score) => acc + score));
}

console.log(
  calculateTotalScore([
    { name: "John", scores: [90, 85, 80] },
    { name: "Jane", scores: [95, 90, 85] },
    { name: "Bob", scores: [80, 85, 90] },
  ])
);
