<img width="1332" height="757" alt="image" src="https://github.com/user-attachments/assets/2f02b1de-3403-4ffb-88c5-516a694062f4" />

---

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (arr, k) {
  let res = [];
  let i = (j = 0);
  let q = [];

  while (j < arr.length) {
    /** We need to push to queue , only after we pop the ele that are smaller from back of queue */
    /** push curr element after removing all ele from last(back) */
    while (q.length && arr[j] > q[q.length - 1]) {
      q.pop();
    }
    q.push(arr[j]);

    // console.log(q)

    /** We need to push to result array if the ws size exceeds */
    // when ws is k
    if (j >= k - 1) {
      /** Here q0 will always be the maximum ele */
      res.push(q[0]);
      /** we need to remove from front of queue if removed ele is matching the max, before increment of i  */
      /** if the leftmost ele for curr window(arr[i]) is largest[q[0]] - then remove it */
      q[0] === arr[i] && q.shift();
      ++i;
    }
    j++;
  }

  return res;
};
```
