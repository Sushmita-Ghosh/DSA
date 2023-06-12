/*Searching unoccupied places in 2D grid

Given a 2D grid represented as a list of lists, where 1 represents an occupied space and 0 represents an unoccupied space, write a function to return the coordinates of all unoccupied spaces.

Example 1:

Input: grid = [[1, 1, 0], [0, 1, 1], [1, 0, 1]] 
Output: [[0, 2], [1, 0], [2, 1]]
Explanation: 
*/

function findUnoccupied(grid) {
  // Your code goes here
  let _coordinatedZero = [];
  for (var row = 0; row < grid.length; row++) {
    for (var col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 0) _coordinatedZero.push([row, col]);
    }
  }
  return _coordinatedZero;
}

console.log(
  findUnoccupied([
    [1, 1, 0],
    [0, 1, 1],
    [1, 0, 1],
  ])
);
