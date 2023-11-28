// https://leetcode.com/problems/baseball-game/

// the whole array is in string make sure to convert them and push

// 0(n) , o(n)  - space & time
var calPoints = function (ops) {
  const newArray = []; // the one where we need to make a sum of

  let i = 0;
  while (i < ops.length) {
    if (ops[i] === "+") {
      newArray.push(
        newArray[newArray.length - 1] + newArray[newArray.length - 2]
      );
    } else if (ops[i] === "C") {
      newArray.pop();
    } else if (ops[i] === "D") {
      newArray.push(newArray[newArray.length - 1] * 2);
    } else {
      newArray.push(parseInt(ops[i])); // parseInt as it is in string
    }

    i++;
  }

  return newArray.reduce((total, ele) => total + ele, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));

// a  better solution of doing sum ek saath hi

var calPoints = function (operations) {
  let stack = [];
  let sum = 0;

  for (let i = 0; i < operations.length; i++) {
    let current = operations[i];
    if (current === "+") {
      let top = stack.pop();
      let newTop = top + stack[stack.length - 1];
      stack.push(top);
      stack.push(newTop);
      sum += newTop;
    } else if (current === "D") {
      let r = 2 * stack[stack.length - 1];
      stack.push(r);
      sum += r;
    } else if (current === "C") {
      let removed = stack.pop();
      sum -= removed;
    } else {
      stack.push(parseInt(current));
      sum += parseInt(current);
    }
  }

  return sum;
};
