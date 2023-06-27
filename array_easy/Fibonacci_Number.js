// https://www.youtube.com/watch?v=0kafYiWEVpU&list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4&index=3
//  https://leetcode.com/problems/fibonacci-number/description/

// We will be given an index and we need to find the fibonacci series number at that index
//  for example 0 1 1 2 3 5 8 13 21 34 55 ...
// F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2) for n>1

// ITERATIVE SOLUTION
var fib = function (n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};

// RECURSION
var fib = function (n) {
  if (n <= 1) return n; // for 0 return 0 , for 1 return 1

  return fib(n - 1) + fib(n - 2);
};

//  ONE LINER
const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

console.log(fib(5));
