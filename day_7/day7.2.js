// Number prime or not

function isPrime(num) {
  // Your code goes here
  let flag = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      flag = true;
      break;
    }
  }

  if (flag === true) return false;
  else return true;
}
