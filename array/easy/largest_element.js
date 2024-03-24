// Brute force

// 1. sort the array
// 2. return the last element

// Optimal Approach
// 1. keep the value in a variable - arr[0] -> assume the first element is the largest
// 2. loop through the array and check if the current element is greater than the variable
// 3. if yes, update the variable

function largestElement(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}
