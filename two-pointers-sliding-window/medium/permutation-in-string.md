<img width="1185" height="422" alt="image" src="https://github.com/user-attachments/assets/74456e5a-ee0b-4252-816c-1789dea8d117" />

---

```js
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let hashW = Array(26).fill(0);
  let hashS = Array(26).fill(0);
  let windowSize = s1.length;
  let i = 0;
  j = windowSize - 1; /** i => left window j => right window */
  /** make the string hash & window hash for first window */
  for (let i = 0; i < windowSize; i++) {
    ++hashW[s2.charCodeAt(i) - 97];
    ++hashS[s1.charCodeAt(i) - 97];
  }

  // console.log(hashW, hashS)

  /** We need to check if hashisvalid , then return true , else update hash and shift window */
  while (j < s2.length) {
    if (isHashValid(hashS, hashW)) {
      return true;
    } else {
      --hashW[s2.charCodeAt(i) - 97];
      ++i;
      ++j;
      ++hashW[s2.charCodeAt(j) - 97];
    }

    // console.log("hashS ", hashS, "HashW", hashW)
  }

  return false;
};

var isHashValid = function (hashS, hashW) {
  /** check for the whole hash - from 0 to 26 ,& compare each if they match return true */
  for (let i = 0; i < 26; i++) {
    if (hashS[i] !== hashW[i]) {
      return false;
    }
  }
  return true;
};
```
