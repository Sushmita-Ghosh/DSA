function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]; // first asseme that first element is sorted
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j]; // shifting elements to insert if > number to insert
      j = j - 1;
    }
    arr[j + 1] = numberToInsert; // insert to the right where condition fails
  }
}

const x = [8, 20, -2, 4, -6];
insertionSort(x);
console.log(x);

// big o (n^2)
