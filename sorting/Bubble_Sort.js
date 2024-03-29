// function bubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }

// const arr = [8, 20, -2, 4, -6];
// bubbleSort(arr);
// console.log(arr);

// big o (n^2)

// Striver's Logic
//https://takeuforward.org/data-structure/bubble-sort-algorithm/

// The logic is to run a loop to length -1 of the array and compare betwwen adjacent element and
// and swap if one is lesser than the other,
// one complete iteration will bring the max to last

// first loop runs till n-1 as we need two swap elements
// https://takeuforward.org/data-structure/bubble-sort-algorithm/

const bubbleSort = (n, arr) => {
  for (let i = 0; i < n - 1; i++) {
    let swap = false; // dont

    // if i goest till n=5 then j should go till 5 , then 4 then 3 --> n-1-i
    // the swap logic is for optimising
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true; // dont
      }
    }
    //dont
    if (swap === false) {
      return arr;
    }
    //console.log(arr);
  }
  return arr;
};

//console.log(bubbleSort(3, [13, 46, 24, 52, 20, 9]));
console.log(bubbleSort(6, [1, 2, 3, 4, 5, 13, 46, 24, 52, 20, 9]));

// Optimization
