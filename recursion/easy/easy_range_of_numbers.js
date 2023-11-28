function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum - 1);
    return numbers;
  }
}

/***
 * rangeOfNumbers(1, 5) => [1, 2, 3, 4, 5]  --> return
 * rangeOfNumbers(1, 4) => [1, 2, 3, 4] ⬆
 * rangeOfNumbers(1, 3) => [1, 2, 3]   ⬆
 * rangeOfNumbers(1, 2) => [1, 2]    ⬆
 * rangeOfNumbers(1, 1) => [1]      ⬆
 * rangeOfNumbers(1, 0) => []                   ⬆
 */

// executed from bottom to top.
