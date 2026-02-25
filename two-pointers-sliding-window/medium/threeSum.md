<img width="1216" height="394" alt="image" src="https://github.com/user-attachments/assets/240b7d54-7ed4-40d7-b8ec-d769ed82c3e3" />

---

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (arr) {
  /** 1. sort the array */
  arr.sort((a, b) => a - b);
  let ans = [];

  /** 1. Keep one value constant - find two sum on other two that adds to target */
  for (let x = 0; x < arr.length; x++) {
    /** a. avoid duplicates here */
    if (arr[x] != arr[x - 1]) {
      twoSum(arr, x, ans);
    }
  }

  return ans;
};

var twoSum = function (arr, x, ans) {
  let i = x + 1; /** start from 1 place after */
  let j = arr.length - 1;

  while (i < j) {
    sum = arr[i] + arr[j] + arr[x];

    //** Here target is 0 */
    if (sum > 0) {
      j--;
    } else if (sum < 0) {
      i++;
    } else {
      ans.push([arr[i], arr[j], arr[x]]);
      i++;
      j--;
      /** b. avoid duplicates before incre or decre
            Keep on increment i if prev value is similar */
      while (i < j && arr[i] == arr[i - 1]) {
        i++;
      }
    }
  }
};
```
