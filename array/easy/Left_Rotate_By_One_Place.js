// https://takeuforward.org/data-structure/left-rotate-the-array-by-one/

// Brute force would be to keep another array and copy the elements

function rotateArrayByOnePlaceBruteForce(arr) {
  let n = arr.length;
  let temp = [];

  for (let i = 0; i < n - 1; i++) {
    temp[i] = arr[i + 1];
  }

  temp[n - 1] = arr[0];
  return temp;
}

// Logic:
// to rotate one place we can take the value of Ist element store it in the array
// and just move the elements to left side then update the n-1 element with 1st
// the ist element should be at last index
function rotateArrayByOnePlace(arr) {
  let last = arr[0];
  let n = arr.length;

  for (i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }

  arr[n - 1] = last;

  return arr;
}

// Complexity
// Time O(n) -> Single pass
// SPace o(1)

console.log(rotateArrayByOnePlace([1, 2, 3, 4, 5]));
