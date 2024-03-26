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

// console.log(secondLargestOptimised([12, 35, 1, 10, 34, 1]));
// console.log(secondLargestOptimised([10, 5, 10]));

// Time complexity : O(n)
// Space complexity : O(1) --> it is not creating an array only returning a value --> secondLargest

// Strivers Approach

// Brute Force

//1. Sort the array, keep the largest as arr[n-1]
//2. traverse from back from n-2 , check if the current element is not equal to largest.
//3. if yes, return the current element

function secondLargestBruteForce(arr) {
  arr.sort((a, b) => a - b); // ascending order
  let n = arr.length;

  let largest = arr[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] !== largest) {
      return arr[i];
    }
  }
}

// console.log(secondLargestBruteForce([12, 35, 1, 10, 34, 1]));
// console.log(secondLargestBruteForce([10, 5, 10]));

// Timecomplexity:
// O(nlogn) + O(n)

// Better
// 2passes - 1st pass for largest
// 2nd passes - !equal to largest  and > than second largest
function findSecondLargestBetterSolution(arr) {
  // define two variables
  let largest = arr[0];
  let slargest = -1; // assuming that the array contains non-negative numbers
  // we will in first pass find the largest
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  // then compare the numbers one by one with second largest

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < largest && arr[i] > slargest) {
      slargest = arr[i];
    }
  }

  return [largest, slargest];
}

// console.log(findSecondLargestBetterSolution([12, 35, 1, 10, 34, 1]));
// console.log(findSecondLargestBetterSolution([10, 5, 10]));

// O(n+n) -> O(2n) -> 2 passes

// Optimised Approach

// second largest
// we will keep two variables l & sl
// arr[i] > l update l as arr[i] & sl as l (old val)
// on single pass we will check if arr[i] < l but > sl --> update sl

// second smallest

function secondLargestInArr(arr) {
  let largest = arr[0];
  let secondLargest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

function secondSmallestInArr(arr) {
  let smallest = arr[0];
  let secondSmallest = 1000000001;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] > smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
}

function secondLargestAndSmallestOptimal(arr) {
  let slargest = secondLargestInArr(arr);
  let ssmallest = secondSmallestInArr(arr);

  return [slargest, ssmallest];
}

console.log(secondLargestAndSmallestOptimal([4, 5, 3, 6, 7]));
console.log(secondLargestAndSmallestOptimal([12, 35, 1, 10, 34, 1]));
