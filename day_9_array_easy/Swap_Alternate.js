// We have to swap the alternate numbers in an array

function swapAlternate(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    if (i + 1 < arr.length) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
}

let even = [2, 4, 5, 6, 7, 8];
let odd = [5, 6, 7, 8, 9];

console.log(swapAlternate(even));
console.log(swapAlternate(odd));
