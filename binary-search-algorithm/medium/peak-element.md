### Understanding Peak Element in Binary Search

**Problem Recap:**

- Given an array `nums` where `nums[i] != nums[i+1]`.
- A **peak element** is one that is greater than its neighbors: `nums[i] > nums[i-1]` and `nums[i] > nums[i+1]`.
- Goal: Find any peak efficiently (O(log n)) using binary search.

---

### Key Idea

Think of the array as a **mountain or slope**:

1. If `nums[mid] < nums[mid+1]`, you are **going uphill**, so a peak **must be on the right**. Move `left = mid + 1`.
2. If `nums[mid] > nums[mid+1]`, you are **going downhill** or at a peak, so the peak is **at mid or on the left**. Move `right = mid`.
3. Repeat until `left == right`, which will point to a peak.

---

### Binary Search Logic (JavaScript Example)

```js
var findPeakElement = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] < nums[mid + 1]) {
      /** uphill */
      left = mid + 1; // peak is on the right
    } else {
      /** downhill - peak can be the mid or left of mid */
      right = mid; // peak is at mid or on the left
    }
  }
  return left; // left == right is a peak
};
```

---

### Why "the array must drop somewhere"?

- Imagine the array as a **mountain range**: `nums = [1, 3, 4, 5, 3, 2]`
- Start mid = 2 → `nums[mid] = 4`, compare with `nums[mid + 1] = 5`
- 4 < 5 → going uphill, move right

The key insight:

1. You **cannot go uphill forever** because the array is **finite**.
2. Eventually you will either:
   - Reach the **end of the array**, or
   - Reach a point where the next element is **smaller than the current one**.

- That point is a **peak**. This is what we mean by “the array must drop somewhere.”

---

### Example

```
Index: 0  1  2  3  4  5
nums:  1, 3, 4, 5, 3, 2
```

- Start mid = 2 → 4
- 4 < 5 → move right
- mid = 3 → 5
- 5 > 3 → peak found at index 3

---

### Analogy

Think of hiking:

- Walking uphill → you cannot hike uphill forever.
- Eventually you reach a **summit or top of a hill** → your peak element.

This intuition guarantees that binary search **will always find a peak**.
