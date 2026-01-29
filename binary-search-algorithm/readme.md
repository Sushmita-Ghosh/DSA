# General Notes on Binary Search

1. The middle index should not be calculated as (l + r) / 2 because l + r can overflow when working with large index values.

2. A safer approach is to calculate the midpoint as:
   l + (r - l) / 2

   Since (r - l) is always within the bounds of the array size, this calculation avoids integer overflow.

# Additional Useful Binary Search Tips

1. Overflow matters in languages like Java, C, and C++ where integers have fixed limits.

2. In Python, this issue doesn’t occur because integers are unbounded — but it’s still good practice to use the safe formula.

3. Some languages also use:
   l + (r - l) >> 1
   which is equivalent and slightly faster in low-level contexts.

4. Always clearly define whether your search range is:

- [l, r] (inclusive), or

- [l, r) (right-exclusive)
  to avoid off-by-one errors.

5. Binary search works only on sorted data (or data with a monotonic property).
