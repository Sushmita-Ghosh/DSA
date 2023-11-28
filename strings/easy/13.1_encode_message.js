// https://www.codingninjas.com/codestudio/guided-paths/data-structures-algorithms/content/118626/offering/1377976

var encodeMessage = (str) => {
  let count = 1;
  let encodedString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      encodedString += str[i] + count;
      count = 1;
    }
  }

  return encodedString;
};

console.log(encodeMessage("aabbc"));
console.log(encodeMessage("ssssssssss"));
