# Find K Closest Elements

This problem asks us to return **k elements closest to x** from a **sorted array**, with the result also sorted.

Closeness is defined as:

- `|a - x| < |b - x|`, or
- `|a - x| == |b - x|` and `a < b`

Because the array is sorted, the answer will always be a **contiguous subarray of length k**.

---

## 1️⃣ Sliding Window (Incremental / Fixed Window Attempt)

### Idea

We try to slide a window of size `k` from left to right and decide whether the **incoming element** is closer to `x` than the **outgoing element**.

```js
while (|arr[i + k] - x| <= |arr[i] - x|)
```

If the new element is closer, we move the window forward.

---

### Code

```js
var findClosestElements = function (arr, k, x) {
  let i = 0;
  let n = arr.length;
  let final = i;

  while (i + k < n && Math.abs(arr[i + k] - x) <= Math.abs(arr[i] - x)) {
    if (Math.abs(arr[i + k] - x) !== Math.abs(arr[i] - x)) {
      final = i + 1;
    }
    i++;
  }

  return arr.slice(final, final + k);
};
```

# Understanding the `final` Variable in the Sliding Window Solution

This note explains **why the `final` variable exists**, what problem it solves, and how it behaves inside the sliding window solution for **Find K Closest Elements**.

---

## The Code in Question

```js
var findClosestElements = function (arr, k, x) {
  let i = 0;
  let n = arr.length;
  let final = i;

  while (i + k < n && Math.abs(arr[i + k] - x) <= Math.abs(arr[i] - x)) {
    if (Math.abs(arr[i + k] - x) !== Math.abs(arr[i] - x)) {
      final = i + 1;
    }
    i++;
  }

  return arr.slice(final, final + k);
};
```

---

## What is `final`?

```js
let final = i;
```

- `i` → current window start index
- `final` → **best window start index found so far**

At the end, the result is returned using:

```js
arr.slice(final, final + k);
```

So `final` determines **which window is ultimately chosen**.

---

## Why Do We Need `final`?

Inside the loop:

- `i` keeps moving forward as long as the condition holds
- But **not every move of `i` represents a better window**

`final` allows us to:

- Explore windows optimistically using `i`
- Commit only when a **strictly better window** is found

Without `final`, the algorithm would incorrectly pick the **last visited window**, even in tie cases.

---

## Loop Condition Explained

```js
while (i + k < n && |arr[i+k] - x| <= |arr[i] - x|)
```

Meaning:

> Keep sliding the window **as long as the incoming element is not worse** than the outgoing one.

- `<` → strictly better
- `==` → tie (allowed, but not an improvement)

---

## When Do We Update `final`?

```js
if (|arr[i + k] - x| !== |arr[i] - x|) {
    final = i + 1;
}
```

### Case 1: Strictly Better Window

```
|arr[i + k] - x| < |arr[i] - x|
```

- Incoming element is **closer to x**
- Window has improved
- ✅ Update `final`

---

### Case 2: Tie Case

```
|arr[i + k] - x| == |arr[i] - x|
```

- Both elements are equally close
- Problem rule: **prefer the smaller element**
- Smaller elements are on the **left side**
- ❌ Do NOT update `final`

This preserves the correct tie-breaking behavior.

---

## Step-by-Step Example (Tie Case)

```js
arr = [1, 2, 3, 4, 5];
k = 4;
x = 3;
```

| i   | Window    | Incoming vs Outgoing | final |      |     |           |         |
| --- | --------- | -------------------- | ----- | ---- | --- | --------- | ------- |
| 0   | [1,2,3,4] |                      | 5−3   | = 2, | 1−3 | = 2 (tie) | stays 0 |

Result:

```
[1,2,3,4]
```

Correct behavior.

---

## Example Where `final` Updates

```js
arr = [1, 2, 3, 4, 5];
k = 2;
x = 4;
```

| i   | Window | Comparison   | final   |
| --- | ------ | ------------ | ------- |
| 0   | [1,2]  | 3 < 3 ❌     | 0       |
| 1   | [2,3]  | 1 < 2 ✅     | 2       |
| 2   | [3,4]  | 1 == 1 (tie) | stays 2 |

Final window:

```
[3,4]
```

---

## Important Limitation ⚠️

Even with `final`, this approach has a **fundamental flaw**:

- The window only slides **from left to right**
- It can miss closer elements that appear much later

Failing example:

```js
arr = [1, 1, 1, 10, 10, 10];
k = 1;
x = 9;
```

Expected:

```
[10]
```

But sliding window can return:

```
[1]
```

This is why **binary search or two-pointer shrinking** is preferred.

---

## Key Takeaways

- `i` → exploratory pointer
- `final` → last confirmed **best window start**
- `final` updates **only on strict improvement**
- Tie cases intentionally do **not update** `final`
- Logic is clever but **not fully reliable** for all cases

---

✅ For interviews, prefer **Binary Search on window start** or **Two-Pointer Shrinking** solutions.

---

### Why This Is Fragile ❌

- The window **only moves one step at a time from the left**
- If early elements are far from `x`, but closer elements appear later, the window may **never reach them**
- Tie cases (`equal distance`) are tricky and can stop movement too early

Example where it fails:

```
arr = [1,1,1,10,10,10], k = 1, x = 9
```

Expected: `[10]`, but fixed window can return `[1]`

➡️ Because of this, fixed sliding window is **not the recommended approach**.

---

## 2️⃣ Binary Search on Window Start (Optimal Solution)

### Key Insight

Since the answer is a **contiguous subarray of size k**, we only need to find the **best starting index**.

Possible start indices range from:

```
0 → arr.length - k
```

We apply **binary search** on this range.

---

### Decision Rule

For a window starting at index `m`:

```
Left distance  = x - arr[m]
Right distance = arr[m + k] - x
```

- If right side is closer → move right
- Else → move left

This directly follows the problem’s closeness definition.

---

### Version 1: Using Absolute Values

```js
var findClosestElements = function (arr, k, x) {
  let l = 0;
  let r = arr.length - k;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);

    if (Math.abs(arr[m] - x) > Math.abs(arr[m + k] - x)) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return arr.slice(l, l + k);
};
```

---

### Version 2: Optimized (No `Math.abs`)

Since the array is sorted:

- `x - arr[m]` is distance on the left
- `arr[m + k] - x` is distance on the right

```js
var findClosestElements = function (arr, k, x) {
  let l = 0;
  let r = arr.length - k;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);

    if (arr[m + k] - x < x - arr[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return arr.slice(l, l + k);
};
```

---

### Why Binary Search Works ✅

- We always compare **which side of the window is worse**
- Binary search guarantees we find the **optimal starting index**
- Tie-breaking (`a < b`) is handled by preferring the **left window**

---

## ⏱ Complexity Comparison

| Approach                 | Time         | Reliability        |
| ------------------------ | ------------ | ------------------ |
| Fixed Sliding Window     | O(n)         | ❌ Edge cases fail |
| Two-Pointer Shrinking    | O(n)         | ✅ Reliable        |
| **Binary Search Window** | **O(log n)** | ✅ Best            |

---

## ✅ Final Takeaway

- Fixed window logic is **tempting but unsafe**
- Binary search on window start is the **cleanest and fastest solution**
- This is the **canonical interview answer** for this problem

# Understanding the `final` Variable in the Sliding Window Solution

This note explains **why the `final` variable exists**, what problem it solves, and how it behaves inside the sliding window solution for **Find K Closest Elements**.

---

## The Code in Question

```js
var findClosestElements = function (arr, k, x) {
  let i = 0;
  let n = arr.length;
  let final = i;

  while (i + k < n && Math.abs(arr[i + k] - x) <= Math.abs(arr[i] - x)) {
    if (Math.abs(arr[i + k] - x) !== Math.abs(arr[i] - x)) {
      final = i + 1;
    }
    i++;
  }

  return arr.slice(final, final + k);
};
```

---

## What is `final`?

```js
let final = i;
```

- `i` → current window start index
- `final` → **best window start index found so far**

At the end, the result is returned using:

```js
arr.slice(final, final + k);
```

So `final` determines **which window is ultimately chosen**.

---

## Why Do We Need `final`?

Inside the loop:

- `i` keeps moving forward as long as the condition holds
- But **not every move of `i` represents a better window**

`final` allows us to:

- Explore windows optimistically using `i`
- Commit only when a **strictly better window** is found

Without `final`, the algorithm would incorrectly pick the **last visited window**, even in tie cases.

---

## Loop Condition Explained

```js
while (i + k < n && |arr[i+k] - x| <= |arr[i] - x|)
```

Meaning:

> Keep sliding the window **as long as the incoming element is not worse** than the outgoing one.

- `<` → strictly better
- `==` → tie (allowed, but not an improvement)

---

## When Do We Update `final`?

```js
if (|arr[i + k] - x| !== |arr[i] - x|) {
    final = i + 1;
}
```

### Case 1: Strictly Better Window

```
|arr[i + k] - x| < |arr[i] - x|
```

- Incoming element is **closer to x**
- Window has improved
- ✅ Update `final`

---

### Case 2: Tie Case

```
|arr[i + k] - x| == |arr[i] - x|
```

- Both elements are equally close
- Problem rule: **prefer the smaller element**
- Smaller elements are on the **left side**
- ❌ Do NOT update `final`

This preserves the correct tie-breaking behavior.

---

## Step-by-Step Example (Tie Case)

```js
arr = [1, 2, 3, 4, 5];
k = 4;
x = 3;
```

| i   | Window    | Incoming vs Outgoing | final |      |     |           |         |
| --- | --------- | -------------------- | ----- | ---- | --- | --------- | ------- |
| 0   | [1,2,3,4] |                      | 5−3   | = 2, | 1−3 | = 2 (tie) | stays 0 |

Result:

```
[1,2,3,4]
```

Correct behavior.

---

## Example Where `final` Updates

```js
arr = [1, 2, 3, 4, 5];
k = 2;
x = 4;
```

| i   | Window | Comparison   | final   |
| --- | ------ | ------------ | ------- |
| 0   | [1,2]  | 3 < 3 ❌     | 0       |
| 1   | [2,3]  | 1 < 2 ✅     | 2       |
| 2   | [3,4]  | 1 == 1 (tie) | stays 2 |

Final window:

```
[3,4]
```

---

## Important Limitation ⚠️

Even with `final`, this approach has a **fundamental flaw**:

- The window only slides **from left to right**
- It can miss closer elements that appear much later

Failing example:

```js
arr = [1, 1, 1, 10, 10, 10];
k = 1;
x = 9;
```

Expected:

```
[10]
```

But sliding window can return:

```
[1]
```

This is why **binary search or two-pointer shrinking** is preferred.

---

## Key Takeaways

- `i` → exploratory pointer
- `final` → last confirmed **best window start**
- `final` updates **only on strict improvement**
- Tie cases intentionally do **not update** `final`
- Logic is clever but **not fully reliable** for all cases
