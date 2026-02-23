````js
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

/** Sliding Window */
/** We need to run the loop from n - window size */
                // i+j , i+j+1; i+j+2
// haystack = dgdgsadjggjgjgjg
            //    i
// needle = sad
//          j



/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let n = haystack.length;
    let m = needle.length;
    // ws = m
    for (let i = 0; i <= n - m; i++) {

        /** If any of the charac in sliding window, don't match - break */
        let j = 0;
        for (; j < m; j++) {
            if (haystack[i + j] != needle[j]) {
                break
            }
        }
        // j will be at the length , if the whole needle is there in haystack
        if(j === m){
            return i
        }
    }

    return -1
};

// o(n) * o(m)
// Space = o(1)


/** KMP - To Search a string inside another string */

//  preprocessing of needle
//  n = onions
// prefix =  "", o, on, oni, onio, onion, onions
// suffix =  "", "s", ns, ons, ions, nions, onions

//proper prefix: "", o, on, oni, onio, onion,
// proper suffix : "", "s", ns, ons, ions, nions,



// Step 1: We need to find -> Length of longest prefix that is also a suffix (LPS)
// onion = on at begigging(pref) & on at end(suff)

// n = [onion]s
// LPS = [0,0,0,1,2,0]

// n = a b c d a b e a b f
// LPS= [0,0,0,1,2, 0, 1,2,0]
```js


````
<img width="1024" height="744" alt="image" src="https://github.com/user-attachments/assets/9d986ba7-3445-4236-abde-988e71ee7aec" />



# KMP — Building the LPS (Longest Prefix Suffix) Array

The **LPS array** stores, for each index `j`, the length of the longest proper prefix of the pattern that is also a suffix ending at `j`.

---

## Key Variables

- `m` = length of the pattern (needle)
- `lps[0] = 0`
- `i` = length of the previous longest prefix-suffix (start at 0)
- `j` = current index (start at 1)

---

## Algorithm (Iterative Construction)

Process while `j < m`:

### ✅ Case 1: Characters Match

If `needle[i] == needle[j]`:

- Increase matched length  
  `i = i + 1`
- Set LPS value  
  `lps[j] = i`
- Move forward  
  `j = j + 1`

---

### ❌ Case 2: Characters Do Not Match

#### If `i != 0`

- Do **not** move `j`
- Fall back using previous LPS value  
  `i = lps[i - 1]`
- Try matching again

#### If `i == 0`

- No prefix available to fall back to
- Set  
  `lps[j] = 0`
- Move forward  
  `j = j + 1`

---

## Intuition

- `i` tracks the current length of matching prefix and suffix
- On mismatch, reuse previously computed LPS values instead of restarting
- This avoids rechecking characters

---

## Time Complexity

- **O(m)** — Linear preprocessing time  
- No character is processed more than a constant number of times

---

## Pseudocode

```text
m = needle.length
lps[0] = 0
i = 0
j = 1

while j < m:
    if needle[i] == needle[j]:
        i += 1
        lps[j] = i
        j += 1
    else:
        if i != 0:
            i = lps[i - 1]
        else:
            lps[j] = 0
            j += 1
```


