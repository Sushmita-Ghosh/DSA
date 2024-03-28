// The goal of selection sort is to find the min element and bring it to the front.

// Each time we will take one value of i and find min with the rest of the array and once
// we find the min we will swap the indexes.

// Here the first loop runs till n-1 as the last element already gets sorted whwn we sort,
// hence we do not need to sort it

const selectionSort = (n, arr) => {
  for (let i = 0; i < n - 1; i++) {
    let mini = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[mini]) {
        // FInd the minimum
        mini = j;
      }

      //once the minimum is found then swap (mini & i)
      let temp = arr[mini];
      arr[mini] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
};

console.log(selectionSort(6, [13, 46, 24, 52, 20, 9]));

// Complexity:
//  Best, Worst , Average - O(n)
