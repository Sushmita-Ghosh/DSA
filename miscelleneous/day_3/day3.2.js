/**
 * Write a program to print a diamond pattern of characters using an array.
 * Input: characters = [A,B,C,D,E], rows = 5 
Output:  
  A  
 ABC 
ABCDE
 ABC 
  A 

Explanation: 
 */

function printDiamond(characters, rows) {
  // Your code goes here
  //  pyramid
  let loop_count = Math.floor(rows / 2) + 1;
  for (let i = 1; i <= loop_count; i++) {
    let str = "";
    // space
    for (let j = 1; j <= loop_count - i; j++) {
      str += " ";
    }
    // alphabets
    str += [...characters.slice(0, 2 * i - 1)].join("");
    console.log(str);
  }
  // reverse pyramid
  loop_count = Math.floor(rows / 2);
  for (let i = loop_count; i >= 1; i--) {
    let str = "";
    // space
    for (let j = loop_count - i + 1; j >= 1; j--) {
      str += " ";
    }
    // alphabets
    str += [...characters.slice(0, 2 * i - 1)].join("");
    console.log(str);
  }
}

console.log(printDiamond(["A", "B", "C", "D", "E"], 5));
console.log(printDiamond(["A", "B", "C", "D", "E", "F", "G"], 7));
// let n = 5;
// let string = "";
// // Pyramid
// let arr = ["A", "B", "C", "D", "E"];
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < n/2; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += arr[k];
//   }
//   string += "\n";
// }
// // Reverse Pyramid
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 1; j < i + 1; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * (n - i) - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// console.log(string);

// nextleap solution

/***
 * printDiamond(characters, rows) {
		let mid = Math.floor((rows - 1) / 2);
    for (let i = 0; i <= mid; i++) {
        let str = '';
        for (let j = 0; j < rows; j++) {
            if (j >= mid - i && j <= mid + i) {
                let index = j - (mid - i);
                str += characters[index];
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
    for (let i = mid - 1; i >= 0; i--) {
        let str = '';
        for (let j = 0; j < rows; j++) {
            if (j >= mid - i && j <= mid + i) {
                let index = j - (mid - i);
                str += characters[index];
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
	}
 */
