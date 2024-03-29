// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let numberToInsert = arr[i]; // first asseme that first element is sorted
//     let j = i - 1;
//     while (j >= 0 && arr[j] > numberToInsert) {
//       arr[j + 1] = arr[j]; // shifting elements to insert if > number to insert
//       j = j - 1;
//     }
//     arr[j + 1] = numberToInsert; // insert to the right where condition fails
//   }
// }

// const x = [8, 20, -2, 4, -6];
// insertionSort(x);
// console.log(x);

// // big o (n^2)

// Striver's
// https://takeuforward.org/data-structure/insertion-sort-algorithm/

/**
 * 
 * @param {
 * 

The outer loop iterates over each element in the array, starting from the second element (i = 1) up to the last element (n - 1).

The inner loop (for (j = i - 1; j >= 0; j--)) iterates backward from the current element (arr[i]) towards the beginning of the array.

Within the inner loop, it checks if the current element (arr[j + 1]) is less than the element before it (arr[j]). If it is, it swaps the two elements.

This swapping continues until the current element is greater than or equal to the element before it, or until it reaches the beginning of the array.

The sorted portion of the array keeps growing with each iteration of the outer loop.

At the end of each iteration of the outer loop, the sorted array up to that point is logged to the console.

Finally, the sorted array is returned.

This algorithm sorts the array in-place, meaning it doesn't require extra space proportional to the size of the input array. Its time complexity is O(n^2) in the worst-case scenario, but it can be efficient for small datasets or nearly sorted arrays} n 
 * @param {*} arr 
 * @returns 
 */

const insertionSort = (n, arr) => {
  for (let i = 1; i < n; i++) {
    for (j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        // swap
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      } else {
        break;
      }
    }
    console.log(arr);
  }
  return arr;
};

console.log(insertionSort(6, [13, 24, 46, 52, 20, 9]));
