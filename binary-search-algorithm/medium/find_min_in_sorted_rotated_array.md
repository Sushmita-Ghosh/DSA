# Finding the Minimum Element in a Rotated Sorted Array

> **Note:** Many resources call this the **inflection** or **pivot** point. In this document, we keep the term **inflation point** as used in the explanation.

---

## Key Concepts

- **Inflation point**: The index from where the originally sorted array was rotated.
- In a **non-rotated sorted array**, the **minimum element is the first element**.
- In a **rotated sorted array**, the minimum element:
  - Is the **only element smaller than its previous element**.
  - Appears exactly at the **inflation point**.

- Once this element is found, it should be **returned immediately**.

---

## High-Level Idea

We use a **binary search–based approach** to efficiently locate the inflation point and return the minimum element.

The key observations:

- One half of the array will always be **sorted**.
- The **inflation point can never be inside the sorted half**.
- Therefore, we always continue the search in the **unsorted half**, reducing the search space.

---

## Algorithm Logic

### Step 1: Handle Fully Sorted Array

If the array is fully sorted (i.e., not rotated at all):

- The minimum element is simply the **first element**.
- Condition to check:

```
if (arr[l] < arr[r])
```

In this case, return `arr[l]` immediately and skip the rest of the logic.

---

### Step 2: Binary Search for Inflation Point

While `l <= r`:

1. Compute mid:
   - `m = (l + r) / 2`

2. **Check for inflation point**:

```
if (arr[m] < arr[m - 1]) {
    return arr[m]; // Found the inflation point
}
```

This works because the minimum element is the only element smaller than its previous one.

---

### Step 3: Decide Which Side to Search

#### How to detect if the left part is sorted?

- If `arr[m] >= arr[l]`, then the **left half is sorted**.
- Since the inflation point cannot be in a sorted part, search the **right half**:

```
l = m + 1
```

#### Otherwise, the right part is sorted

- If `arr[m] < arr[l]`, the **rotation (inflation point) lies in the left half**.

Example:

```
[6, 7, 8, 0, 1, 2, 3, 4, 5]
 l        m        r
```

- Here:
  - `arr[m] = 1`
  - `arr[l] = 6`
  - Since `1 < 6`, the **left side is unsorted** and contains the inflation point.

So we move left:

```
r = m - 1
```

---

### Step 4: Single Element Case

- When `l == r`, then `l`, `r`, and `m` all point to the **same element**.
- This element is the minimum and should be returned.

---

## Summary

- Check if the array is already sorted → return first element.
- Use binary search to locate the **only element smaller than its previous element**.
- Always discard the **sorted half** and search in the **unsorted half**.
- Time Complexity: **O(log n)**
- Space Complexity: **O(1)**

---

This approach efficiently finds the minimum element in a rotated sorted array using binary search principles.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    // if the searching space  is sorted; no need to check anymore
    if (arr[l] <= arr[r]) {
      return arr[l];
    }
    /** Pivot point */
    if (arr[m] < arr[m - 1]) {
      return arr[m];
    }

    /** Find if left is not sorted */
    if (arr[l] > arr[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
};
```
