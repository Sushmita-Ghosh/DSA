class Solution {
  /**
   * @param {number[]} A
   * @return {number}
   */
  bubbleSort(arr) {
    // Your code goes here
    let count = 0;
    let n = arr.length - 1;
    let swapped = true;
    do {
      swapped = false;
      count += 1;
      for (let i = 0; i < n; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return count;
  }
}
