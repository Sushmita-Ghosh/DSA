<img width="1586" height="648" alt="image" src="https://github.com/user-attachments/assets/f5a4394f-bed4-4624-bc28-5a37e2782d75" />

---

<img width="1374" height="414" alt="image" src="https://github.com/user-attachments/assets/2cb15276-98f5-4592-b4f6-f81ad3411e08" />

---

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;
  while (i < j) {
    let area = Math.min(height[i], height[j]) * (j - i);
    maxArea = Math.max(area, maxArea);
    height[i] < height[j] ? i++ : j--;
    // if (height[i] < height[j]) {
    //     i++;
    // } else {
    //     j--;
    // }
  }
  return maxArea;
};
```
