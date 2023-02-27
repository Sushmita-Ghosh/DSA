// ** Traverse in w style for 2d array

function printCols(arr) {
  var _1DArray = [];
  for (var col = 0; col < arr[0].length; col++) {
    // if (col % 2 === 0 || col === 0) {
    for (var row = 0; row < arr.length; row++) {
      _1DArray.push(arr[row][col]);
    }
    // } else {
    //   for (var row = arr.length; row > 0; row--) {
    //     _1DArray.push(arr[col][row]);
    //   }
    // }
  }
  return _1DArray;
}

function printinWstyle(arr) {
  var _1DArray = [];
  for (var col = 0; col < arr[0].length; col++) {
    if (col % 2 === 0) {
      // go down
      for (var row = 0; row < arr.length; row++) {
        _1DArray.push(arr[row][col]);
      }
    } else {
      // go up
      for (var row = arr.length - 1; row >= 0; row--) {
        _1DArray.push(arr[row][col]);
      }
    }
  }
  return _1DArray;
}

console.log(
  printinWstyle([
    ["a", "b", "c", "d"],
    ["e", "f", "g", "h"],
    ["i", "j", "k", "l"],
    ["m", "n", "o", "p"],
  ])
);

function printSnakeStyle(arr) {
  var _1DArray = [];
  for (var row = 0; row < arr.length; row++) {
    if (row % 2 === 0) {
      // go down
      for (var col = 0; col < arr[0].length; col++) {
        _1DArray.push(arr[row][col]);
      }
    } else {
      // go up
      for (var col = arr.length - 1; col >= 0; col--) {
        _1DArray.push(arr[row][col]);
      }
    }
  }
  return _1DArray;
}

console.log(
  printSnakeStyle([
    ["a", "b", "c", "d"],
    ["e", "f", "g", "h"],
    ["i", "j", "k", "l"],
    ["m", "n", "o", "p"],
  ])
);
