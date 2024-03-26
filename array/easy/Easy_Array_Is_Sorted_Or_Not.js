// https://www.codingninjas.com/studio/problems/ninja-and-the-sorted-check_6581957?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

// Brute FOrce // O(n)

// check if the next number is greater than the previous number if yes continue;
// if not return

const isSorted = (n, arr) => {
  for (let i = 0; i < n; i++) {
    if (arr[i + 1] < arr[i]) {
      return 0;
    }
  }

  return 1;
};

//O(n)
console.log(isSorted(4, [0, 0, 0, 1]));
console.log(isSorted(5, [4, 5, 4, 4, 4]));
