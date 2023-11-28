// Second Largest Element in an Array
// Given an array of size N, print the second largest distinct element in the array

// Input : [12, 35, 1, 10, 34 , 1] -> 34
// Input : [10,5,10] -> 5

// Brute Force Approach --> has duplicated
// 1. Since it can have duplicates - we will take a set of the array
// 2. Sort the array --> then from last select second element
// Time complexity : O(nlogn)
function secondLargest(arr) {
  // here set return an iterable object and not array so we need to convert it to an array
  const unique = Array.from(new Set(arr)); // O(n)

  unique.sort((a, b) => b - a); // O(n log n)

  // only when array's length is > 2 then only it will have second largest
  if (unique.length >= 2) {
    return unique[1];
  } else {
    return -1;
  }

  // console.log(unique);
}

// Optimised Approach --> greedy approach
// [12, 35, 1, 10, 34, 1];
function secondLargestOptimised(arr) {
  // let largest = -1;
  // let secondLargest = -1;

  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(secondLargestOptimised([12, 35, 1, 10, 34, 1]));
console.log(secondLargestOptimised([10, 5, 10]));

// Time complexity : O(n)
// Space complexity : O(1) --> it is not creating an array only returning a value --> secondLargest
