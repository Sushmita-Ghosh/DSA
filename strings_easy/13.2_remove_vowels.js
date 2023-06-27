// https://www.codingninjas.com/codestudio/guided-paths/data-structures-algorithms/content/118626/offering/1377977?leftPanelTab=0

var removeVowel = (str) => {
  let allVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!allVowels.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
};
