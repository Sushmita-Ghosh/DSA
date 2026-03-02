<img width="1122" height="262" alt="image" src="https://github.com/user-attachments/assets/ecf87e9a-6010-4899-9b6d-accb84c73ac8" />

---

<img width="1486" height="443" alt="image" src="https://github.com/user-attachments/assets/d39f8757-eec7-4dc4-8845-3fa3a307f5b8" />

---

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  /**
        i = left pointer
        j= right pointer
     */

  /* {
            A: 1
            B: 2
     } */

  let i = (j = 0);
  let map = {};
  map[s[0]] = 1;
  let maxWindowSize = (currentWindowSize = 0);

  while (j < s.length) {
    if (isWindowValid(map, k)) {
      /** calculate max, include characters from right, update map */
      currentWindowSize = j - i + 1;
      maxWindowSize = Math.max(currentWindowSize, maxWindowSize);
      j++;
      map[s[j]] = !map[s[j]] ? 1 : map[s[j]] + 1;
    } else {
      /**update map, shrink from left */
      map[s[i]]--;
      i++;
    }

    // console.log(currentWindowSize, maxWindowSize, map)
  }
  return maxWindowSize;
};

var isWindowValid = function (map, k) {
  let maxCharCount = (totalCountOfMap = 0);

  for (let i = 0; i < 26; i++) {
    /** find the charac code at i */
    let char = String.fromCharCode(i + 65);
    if (map[char]) {
      /** if the charac is present */
      totalCountOfMap = totalCountOfMap + map[char];
      maxCharCount = Math.max(maxCharCount, map[char]);
    }
  }

  return totalCountOfMap - maxCharCount <= k;
};
```

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  /**
        i = left pointer
        j= right pointer
     */
  let i = (j = 0);
  let map = Array(26).fill(0);
  map[s.charCodeAt(0) - 65] = 1;
  let maxWindowSize = (currentWindowSize = 0);

  // [0,0,...26] [till 26 charc each posn signifies a chacter 0-A, 1-B...]

  while (j < s.length) {
    if (isWindowValid(map, k)) {
      /** calculate max, include characters from right, update map */
      currentWindowSize = j - i + 1;
      maxWindowSize = Math.max(currentWindowSize, maxWindowSize);
      j++;
      ++map[s.charCodeAt(j) - 65];
    } else {
      /**update map, shrink from left */
      --map[s.charCodeAt(i) - 65];
      i++;
    }

    // console.log(currentWindowSize, maxWindowSize, map)
  }
  return maxWindowSize;
};

var isWindowValid = function (map, k) {
  let maxCharCount = (totalCountOfMap = 0);

  for (let i = 0; i < 26; i++) {
    totalCountOfMap = totalCountOfMap + map[i];
    maxCharCount = Math.max(maxCharCount, map[i]);
  }

  return totalCountOfMap - maxCharCount <= k;
};
```
