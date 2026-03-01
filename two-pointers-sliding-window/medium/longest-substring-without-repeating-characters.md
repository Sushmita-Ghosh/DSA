## <img width="585" height="674" alt="image" src="https://github.com/user-attachments/assets/c68ca568-d8e1-4ab3-8cef-9a8c5c088a9c" />

## <img width="618" height="316" alt="image" src="https://github.com/user-attachments/assets/d0402fc4-92f4-44be-8485-3ea388d470eb" />

<img width="893" height="402" alt="image" src="https://github.com/user-attachments/assets/65f5fccf-b21f-4206-9099-2a0c57cd00de" />

---

## <img width="954" height="486" alt="image" src="https://github.com/user-attachments/assets/4d9707dc-594a-4dd1-8794-fc5821b43be5" />

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (arr) {
  let i = (j = 0);
  let map = new Map();
  let maxWS = 0;
  let currWS = 0;

  for (j = 0; j < arr.length; j++) {
    /** if the ele is already present && new charac is present in window, update i for purging */
    if (map.has(arr[j]) && map.get(arr[j]) >= i) {
      /** it is duplicate so update i */
      i = map.get(arr[j]) + 1;
    }
    // update j in map ,
    map.set(arr[j], j);
    currWS = j - i + 1;
    maxWS = Math.max(currWS, maxWS);

    console.log(map, currWS, maxWS);
  }

  return maxWS;
};
```

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let maxLen = 0;
  let map = {}; // plain object

  for (let j = 0; j < s.length; j++) {
    // If character seen AND inside current window
    if (map[s[j]] !== undefined && map[s[j]] >= i) {
      i = map[s[j]] + 1;
    }

    // Store/update latest index
    map[s[j]] = j;

    // Update window size
    let currLen = j - i + 1;
    maxLen = Math.max(maxLen, currLen);
  }

  return maxLen;
};
```
