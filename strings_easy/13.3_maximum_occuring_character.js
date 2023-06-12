// https://www.youtube.com/watch?v=FTY688YU5nk&list=PL_HlKez9XCSOi5thYDzipbJ2pEdzop7vx&index=19
// Find the max occuring charac in string

// approach
//  we can split the string and store in hashmap{} object -> key will be the char: charcount
// then we will loop and find max and the charac
// https://www.geeksforgeeks.org/return-maximum-occurring-character-in-the-input-string/

function getMaxOcuuring(str) {
  let map = {}; // hashing

  // if the element is present do +1 in the value else 1
  str.split("").forEach((ele) => {
    map[ele] = map[ele] ? map[ele] + 1 : 1;
  });

  let max = 1;
  let char = str[0];
  for (let ele in map) {
    if (map[ele] > max) {
      max = map[ele]; // count
      char = ele; // the ele
    }
  }

  return { max, char };
}

let { max, char } = getMaxOcuuring("Hello World");
console.log("Count of the max charac: ", max);
console.log("the max character is: ", char);
