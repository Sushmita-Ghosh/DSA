/**Given an array of integers, return the sum of all even numbers in the array.
 * Input: arr = [1,2,3,4,5] 
Output: 6

 */

function sumEvenNumbers(arr) {
  // Your code goes here
  // if num %2 then add to total else keep it as total
  return arr.reduce((total, num) => (num % 2 == 0 ? total + num : total), 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5]));
