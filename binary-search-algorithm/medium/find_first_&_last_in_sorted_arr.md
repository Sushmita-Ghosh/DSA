# Find First and Last Position of Element in Sorted Array

This document explains **each step** of the solution that finds the **starting and ending position** of a given target value in a **sorted array** using **binary search**.

---

## Problem Overview

Given:

- A sorted array `nums`
- A target value `target`

Return:

- An array `[firstIndex, lastIndex]` where:
  - `firstIndex` is the **first occurrence** of `target`
  - `lastIndex` is the **last occurrence** of `target`

- If the target does not exist, return `[-1, -1]`

---

## Why Binary Search?

- The array is **sorted**, which makes binary search applicable.
- A single binary search cannot reliably find **both** first and last positions.
- Therefore, we perform **two binary searches**:
  1. One to find the **first occurrence** (leftmost index)
  2. One to find the **last occurrence** (rightmost index)

Each search runs in **O(log n)** time.

---

## Initial Setup

```js
let l = 0;
let r = arr.length - 1;
let ans = [-1, -1];
```

- `l` and `r` define the current search space.
- `ans` stores the final result:
  - `ans[0]` → first occurrence
  - `ans[1]` → last occurrence

---

## Binary Search 1: Find the First (Leftmost) Occurrence

### Goal

Find the **smallest index** where `arr[index] === target`.

This is called a **left-safe binary search**, meaning:

- When we find the target, we **do not stop immediately**.
- Instead, we continue searching **towards the left** to ensure it is the first occurrence.

---

### Loop Condition

```js
while (l < r)
```

- The loop continues until the search space collapses to a single index.

---

### Mid Calculation

```js
let m = l + Math.floor((r - l) / 2);
```

- Uses `Math.floor` to bias the mid **towards the left**.
- Prevents infinite loops.

---

### Decision Logic

```js
if (arr[m] < target)
  l = m + 1; // search right side
else r = m; // move left
```

Explanation:

- If `arr[m] < target`, the target must be on the **right side**.
- Otherwise (`arr[m] >= target`), we move `r` left because:
  - The first occurrence could be at `m` or before it.

---

### Final Check for First Occurrence

```js
if (arr[l] === target) ans[0] = l;
```

- After the loop, `l` points to the **leftmost possible index**.
- If the value matches the target, store it as the first occurrence.

---

## Reset Pointers

```js
l = 0;
r = arr.length - 1;
```

- We reset the search space to reuse binary search logic.
- Now we search for the **last occurrence**.

---

## Binary Search 2: Find the Last (Rightmost) Occurrence

### Goal

Find the **largest index** where `arr[index] === target`.

This is a **right-safe binary search**, meaning:

- When we find the target, we continue searching **towards the right**.

---

### Loop Condition

```js
while (l < r)
```

- Same stopping condition as before.

---

### Mid Calculation (Right-Biased)

```js
let m = l + Math.ceil((r - l) / 2);
```

- Uses `Math.ceil` to bias the mid **towards the right**.
- Prevents infinite loops when updating `l`.

---

### Decision Logic

```js
if (arr[m] > target) r = m - 1;
else l = m;
```

Explanation:

- If `arr[m] > target`, the target must be on the **left side**.
- Otherwise (`arr[m] <= target`), move `l` right to find the last occurrence.

---

### Final Check for Last Occurrence

```js
if (arr[l] === target) ans[1] = l;
```

- After the loop, `l` points to the **rightmost possible index**.
- If it matches the target, store it as the last occurrence.

---

## Final Result

```js
return ans;
```

- Returns `[firstIndex, lastIndex]`
- If the target does not exist in the array, the result remains `[-1, -1]`.

---

## Complexity Analysis

- **Time Complexity:** `O(log n)`
  - Two binary searches

- **Space Complexity:** `O(1)`
  - No extra space used

---

## Key Takeaways

- Use **two binary searches** to find range boundaries.
- Bias mid calculation:
  - `floor` for left boundary
  - `ceil` for right boundary

- Never stop early when target is found—keep shrinking the search space.

---

This approach is efficient, clean, and interview-ready.

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (arr, target) {
  let l = 0;
  let r = arr.length - 1;
  let ans = [-1, -1];

  /** We run two binary search */
  /** 1. Find starting ele, left safe */

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] < target) l = m + 1; /**(search in right side)*/
    else r = m;
  }

  if (arr[l] === target) ans[0] = l;

  /** reset pointers */
  l = 0;
  r = arr.length - 1;

  /** Find upper index, right safe */
  while (l < r) {
    let m = l + Math.ceil((r - l) / 2);
    if (arr[m] > target) r = m - 1;
    else l = m;
  }

  if (arr[l] === target) ans[1] = l; // return index
  return ans;
};
```

# Find First and Last Position of Element in Sorted Array (Binary Search with `l <= r`)

This document provides a **full step-by-step explanation** of the solution that finds the **first and last occurrence** of a target element in a sorted array using **two classical binary searches** with the condition `l <= r`.

---

## Problem Overview

Given:

- A **sorted array** `arr`
- A **target** value

Return:

- An array `[startIndex, endIndex]` where:
  - `startIndex` → first occurrence of `target`
  - `endIndex` → last occurrence of `target`

- If the target does not exist, return `[-1, -1]`

---

## Key Idea

- Because the array is sorted, **binary search** is optimal.
- A single binary search cannot find both boundaries.
- We perform **two separate binary searches**:
  1. One to find the **starting position**
  2. One to find the **ending position**

Each search narrows the range in a controlled way to ensure correctness.

---

## Initial Setup

```js
let l = 0;
let r = arr.length - 1;
let ans = [-1, -1];
```

- `l` → left pointer
- `r` → right pointer
- `ans` stores the final result:
  - `ans[0]` → start index
  - `ans[1]` → end index

---

## Binary Search 1: Find the First (Starting) Position

### Goal

Find the **leftmost index** where `arr[index] === target`.

Even after finding the target, we **continue searching left** to ensure it is the first occurrence.

---

### Loop Condition

```js
while (l <= r)
```

- The loop continues as long as the search space is valid.

---

### Mid Calculation

```js
let m = l + Math.floor((r - l) / 2);
```

- Prevents integer overflow.
- Standard mid calculation for binary search.

---

### Decision Logic

```js
if (arr[m] === target) {
  ans[0] = m;
  r = m - 1;
}
```

Explanation:

- When the target is found:
  - Store the index as a **potential answer**.
  - Move `r` left to check if the target appears earlier.

---

```js
else if (arr[m] < target) {
    l = m + 1;
}
```

- If the mid value is smaller than the target, the target must be on the **right side**.

---

```js
else {
    r = m - 1;
}
```

- If the mid value is greater than the target, the target must be on the **left side**.

---

### Result After First Search

- After the loop finishes:
  - `ans[0]` contains the **first occurrence**, or remains `-1` if not found.

---

## Reset Pointers

```js
l = 0;
r = arr.length - 1;
```

- We reset the search space for the second binary search.

---

## Binary Search 2: Find the Last (Ending) Position

### Goal

Find the **rightmost index** where `arr[index] === target`.

When the target is found, we continue searching **towards the right**.

---

### Loop Condition

```js
while (l <= r)
```

- Same condition as the first search.

---

### Mid Calculation

```js
let m = l + Math.floor((r - l) / 2);
```

- Uses the same mid calculation for consistency.

---

### Decision Logic

```js
if (arr[m] === target) {
  ans[1] = m;
  l = m + 1;
}
```

Explanation:

- When the target is found:
  - Store the index as a **possible last position**.
  - Move `l` right to search for a later occurrence.

---

```js
else if (arr[m] < target) {
    l = m + 1;
}
```

- If mid value is smaller than target, discard the left half.

---

```js
else {
    r = m - 1;
}
```

- If mid value is larger than target, discard the right half.

---

### Result After Second Search

- After the loop finishes:
  - `ans[1]` contains the **last occurrence**, or remains `-1`.

---

## Final Result

```js
return ans;
```

- Returns `[firstIndex, lastIndex]`.
- If the target does not exist, both values remain `-1`.

---

## Complexity Analysis

- **Time Complexity:** `O(log n)`
  - Two binary searches

- **Space Complexity:** `O(1)`
  - Constant extra space

---

## Key Differences from the `< l < r >` Variant

- Uses `l <= r` loop condition.
- Updates the answer immediately upon finding the target.
- Continues shrinking search space even after a match.
- Easier to reason about for many interviewers.

---

## Key Takeaways

- Always keep searching after finding the target.
- Move **left** to find the first position.
- Move **right** to find the last position.
- Binary search is ideal due to sorted input.

---

This version is intuitive, robust, and commonly accepted in interviews.

/\*\*

- @param {number[]} nums
- @param {number} target
- @return {number[]}
  \*/
  var searchRange = function (arr, target) {
  let l = 0;
  let r = arr.length - 1
  let ans = [-1, -1]

      while (l <= r) {
          /** for starting posn, search space right */
          let m = l + Math.floor((r - l) / 2)
          if (arr[m] === target) {
              ans[0] = m
              r = m - 1
          } else if (arr[m] < target) {
              l = m + 1
          } else {
              r = m - 1
          }
      }

      l = 0;
      r = arr.length - 1
      while (l <= r) {
          /** for  end posn search space left */
          let m = l + Math.floor((r - l) / 2)
          if (arr[m] === target) {
              ans[1] = m
              l = m + 1
          } else if (arr[m] < target) {
              l = m + 1
          } else {
              r = m - 1
          }
      }

  return ans
  };
