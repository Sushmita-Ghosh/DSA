# Single Element in a Sorted Array

---

## Problem Overview

You are given a **sorted array** where:

- Every element appears **exactly twice**
- **One element appears only once**
- The array is sorted in non-decreasing order

Your task is to find and return the **single (non-duplicate) element**.

---

## Simple / Brute Force Solutions

### 1. Using a Map (Frequency Count)

- Traverse the array and store counts in a map
- Traverse the map to find the element with count = 1

**Complexity:**

- Time: `O(n)`
- Space: `O(n)` ❌ (not optimal)

---

### 2. Linear Traversal

- Traverse the array
- If `arr[i] !== arr[i + 1]`, return `arr[i]`

**Complexity:**

- Time: `O(n)`
- Space: `O(1)`

Still not optimal because we can do better.

---

## Optimal Solution: Binary Search

### Why Binary Search Works

<img width="827" height="576" alt="image" src="https://github.com/user-attachments/assets/5e698a14-9828-4234-b638-4c86b3f7d94b" />

Because the array is **sorted** and contains **pairs**, the indices follow a pattern:

- Before the single element:
  - Pairs start at **even indices** `(0,1), (2,3), ...`

- After the single element:
  - Pairs start at **odd indices** `(1,2), (3,4), ...`

The single element **breaks this pattern**.

Using this insight, we can eliminate half the array at every step.

---

## Binary Search Implementation

```js
var singleNonDuplicate = function (arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if (arr[m] === arr[m - 1]) {
      // Pair exists on the left side
      let leftcount = m - 1 - l;

      if (leftcount % 2 === 1) {
        r = m - 2;
      } else {
        l = m + 1;
      }
    } else if (arr[m] === arr[m + 1]) {
      // Pair exists on the right side
      let leftcount = m - l;

      if (leftcount % 2 === 1) {
        r = m - 1;
      } else {
        l = m + 2;
      }
    } else {
      // Single element found
      return arr[m];
    }
  }
};
```

---

## Step-by-Step Explanation

### Step 1: Initialize Pointers

```js
let l = 0;
let r = arr.length - 1;
```

- `l` → left boundary of search space
- `r` → right boundary of search space

---

### Step 2: Binary Search Loop

```js
while (l <= r)
```

- Continue searching while the range is valid

---

### Step 3: Compute Mid

```js
let m = l + Math.floor((r - l) / 2);
```

- Prevents integer overflow
- Chooses a middle index to analyze

---

### Step 4: Check Pair on the Left

```js
if (arr[m] === arr[m - 1])
```

- This means `m` is the **second element of a pair**
- The pair occupies indices `(m - 1, m)`

#### Count elements on the left

```js
let leftcount = m - 1 - l;
```

- Number of elements strictly before this pair

#### Decide direction

- If `leftcount` is **odd**:
  - The single element lies **on the left side**
  - Move `r = m - 2`

- Else:
  - The single element lies **on the right side**
  - Move `l = m + 1`

---

### Step 5: Check Pair on the Right

```js
else if (arr[m] === arr[m + 1])
```

- This means `m` is the **first element of a pair**
- The pair occupies indices `(m, m + 1)`

#### Count elements on the left

```js
let leftcount = m - l;
```

#### Decide direction

- If `leftcount` is **odd**:
  - The single element lies **on the left side**
  - Move `r = m - 1`

- Else:
  - The single element lies **on the right side**
  - Move `l = m + 2`

---

### Step 6: Single Element Case

```js
else {
    return arr[m];
}
```

- If `arr[m]` is not equal to either neighbor
- Then it must be the **unique element**

---

## Example

Array:

```
[1, 1, 2, 3, 3, 4, 4]
```

- Single element = `2`
- Pair pattern breaks at index `2`

Binary search isolates this index efficiently.

---

## Complexity Analysis

- **Time Complexity:** `O(log n)` ✅
- **Space Complexity:** `O(1)` ✅

---

## Key Takeaways

- Sorted array + paired elements ⇒ binary search applicable
- Count of elements on one side tells where the single element lies
- Always discard the half that follows valid pairing rules
- Much faster than linear or map-based solutions

---

This is the most optimal and interview-preferred solution.
