// hello --> olleh

var reverseString = function (s) {
  console.log(s);
  if (s === "") return "";
  return reverseString(s.substr(1)) + s.charAt(0);
};

console.log(reverseString("hello"));
