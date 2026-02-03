### First Bad Version - Understanding Binary Search

**Problem recap:**

- Versions are numbered from `1…n`.
- There is a first bad version, and **all versions after it are also bad**.
- Goal: Find the **first bad version** with minimal calls to `isBadVersion(version)`.

---

**Key understanding:**

1. If `mid` (m) is **good**, the first bad version must be **after it**, so we search **right**: `mid + 1 … end`. ✅

2. If `mid` is **bad**, the first bad version could be **mid itself** or somewhere **to the left**, so we **include mid** in the next search interval: `start … mid`. ✅

---

**Summary:**

- Good → search **right** (`mid + 1 … end`)
- Bad → search **left including mid** (`start … mid`)

This is exactly the **binary search pattern to find the first occurrence** in a sorted array.

---

l < r is used to stop when only one element is left.
We include mid when bad, ensuring we don’t skip the first bad version.
Using l <= r could cause extra iterations or incorrect bounds for “first occurrence” searches.

Use l < r when you’re finding the first occurrence in a sorted array.
It guarantees the loop ends when only one candidate remains, and that candidate is your answer.

```js
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;
    while (l < r) {
      let m = Math.floor((r - l) / 2) + l;
      let isBad = isBadVersion(m);
      if (isBad === false) {
        /** it lies on right side */
        l = m + 1;
      } else {
        r = m;
      }
    }
    return l; // return l or r doesnot matter both are equal
  };
};
```
