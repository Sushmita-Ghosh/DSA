<img width="1545" height="758" alt="image" src="https://github.com/user-attachments/assets/1d21eef2-72c6-491a-80e7-a83b7fe1339c" />

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let maxL = [];
  maxL[0] = height[0];
  let n = height.length;
  let ans = 0;

  /** Calculating maxL on whole array */
  for (let i = 1; i < n; i++) {
    /** maxL = Maximum of maxL till prev number, current height */
    maxL[i] = Math.max(maxL[i - 1], height[i]);
  }

  let maxR = [];
  maxR[n - 1] = height[n - 1];

  /** Calculating maxL on whole array */
  for (let j = n - 2; j >= 0; j--) {
    /** maxR = Maximum of maxR till next number, current height */
    maxR[j] = Math.max(maxR[j + 1], height[j]);
  }

  /** Calculating trapped water and sum */
  let trappedWater;
  for (let i = 0; i < n; i++) {
    trappedWater = Math.min(maxR[i], maxL[i]) - height[i];
    /*If some where the trapped water becomes -ve we need to consider as 0*/
    ans = ans + (trappedWater < 0 ? 0 : trappedWater);
  }
  return ans;
};
```

#### Improvements on the above code

```js
var trap = function (height) {
  let maxL = [];
  maxL[0] = height[0];
  let n = height.length;
  let ans = 0;

  let maxR = [];
  maxR[n - 1] = height[n - 1];

  /** Calculating maxL on whole array */
  for (let i = 1; i < n; i++) {
    /** maxL = Maximum of maxL till prev number, current height */
    maxL[i] = Math.max(maxL[i - 1], height[i]);
    // maxR[n-1-i] = Math.max(maxR[n - 1 - i + 1], height[n-1-i]);
    maxR[n - 1 - i] = Math.max(maxR[n - i], height[n - 1 - i]);
  }

  /** Calculating trapped water and sum */
  let trappedWater;
  for (let i = 0; i < n; i++) {
    trappedWater = Math.min(maxR[i], maxL[i]) - height[i];
    /*If some where the trapped water becomes -ve we need to consider as 0*/
    ans = ans + Math.max(0, trappedWater);
  }
  return ans;
};
```
