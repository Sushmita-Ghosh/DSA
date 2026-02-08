# Peak Index in a Mountain Array

---

## Problem Overview

A **mountain array** is an array where:

- The elements **strictly increase** up to a single peak
- After the peak, the elements **strictly decrease**
- There is **only one peak element** in the entire array

You can visualize it like a mountain:

- Left side → going **uphill**
- Right side → going **downhill**

---

## Goal

Given a mountain array `arr`, return the **index of the peak element**.

---

## Brute Force Approach (Linear Search)

- Traverse the array from left to right
- Find the index where:
  - `arr[i] > arr[i - 1]` **and** `arr[i] > arr[i + 1]`

### Drawback

- Time Complexity: **O(n)**
- We can do better by using **binary search** because the array has a special structure.

---

## Optimized Approach: Binary Search

### Why Binary Search Works Here

- The array is **not fully sorted**, but it has a predictable shape:
  - Increasing section
  - Decreasing section

- At any index, we can decide **which side of the peak** we are on by comparing neighboring elements.

This allows us to eliminate half of the search space each time.

---

## Binary Search Logic

```js
var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);

    if (arr[m + 1] > arr[m]) {
      // We are on the increasing slope
      l = m + 1;
    } else {
      // We are on the decreasing slope (or at the peak)
      r = m;
    }
  }

  return l;
};
```

---

## Step-by-Step Explanation

### Step 1: Initialize Pointers

```js
let l = 0;
let r = arr.length - 1;
```

- `l` → start of the array
- `r` → end of the array
- The peak is guaranteed to lie somewhere between them

---

### Step 2: Binary Search Loop

```js
while (l < r)
```

- We stop when the search space reduces to **one element**
- That element will be the peak

---

### Step 3: Calculate Mid

```js
let m = l + Math.floor((r - l) / 2);
```

- Prevents overflow
- Picks a middle index to analyze the slope

---

### Step 4: Decide the Direction

#### Case 1: Increasing Slope

```js
if (arr[m + 1] > arr[m])
```

- This means we are **going uphill**
- The peak must be **to the right** of `m`

So we move left pointer:

```js
l = m + 1;
```

---

#### Case 2: Decreasing Slope or Peak

```js
else
```

- This means we are **going downhill** or already at the peak
- The peak lies at `m` or **to the left** of `m`

So we move right pointer:

```js
r = m;
```

---

### Step 5: Termination

- When `l === r`, both pointers point to the **peak index**

```js
return l;
```

---

## Example Walkthrough

Array:

```
[1, 3, 5, 7, 6, 4, 2]
```

- Mid at index `3` → value `7`
- `arr[4] < arr[3]` → decreasing slope
- Peak is at or left of index `3`

Binary search continues until `l == r == 3`.

---

## Complexity Analysis

- **Time Complexity:** `O(log n)`
- **Space Complexity:** `O(1)`

---

## Key Takeaways

- Mountain array has **exactly one peak**
- Compare `arr[m]` with `arr[m + 1]` to detect the slope
- Always move towards the direction where the peak must exist
- Binary search gives a clean and optimal solution

---

This approach is elegant, efficient, and commonly expected in interviews.
