// Find numbers greater than a given number
// Easy
// Marks Available: 20.00
// Rank: 7
// Score: 240.0
// Write a program to find numbers greater than a given number in an array

// Example 1:

// Input: arr = [1,2,3,4,5,6], num = 4
// Output: [5,6]
// Explanation:

function greaterThan(arr, num) {
  // Your code goes here
  let startingIndex = arr.indexOf(num); // since the array is sorted so the
  return arr.slice(startingIndex + 1);
}
