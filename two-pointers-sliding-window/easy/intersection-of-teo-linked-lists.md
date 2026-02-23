```js
/**
 * 1. length of ll1 -> n
 * 2. length of ll2  -> m
 * 3. do n-m (that is the extra part)
 * 4. then start comparting pA & pB when the pointer match that is intersection
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  /** 1. Calculate lengths */
  let n = 0;
  let pA = headA;
  while (pA) {
    n += 1;
    pA = pA.next;
  }

  let m = 0;
  let pB = headB;
  while (pB) {
    m += 1;
    pB = pB.next;
  }

  /** 2. Calculate difference - need to skip the nodes in longer list*/
  let diff = Math.abs(n - m);

  /**3. Always want first as small & second as large; if not we swap the pointers */
  if (n > m) {
    temp = headA;
    headA = headB;
    headB = temp;
  }

  /** Skip nodes in second list */
  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }

  /** Now start comparing te pointers till they meet */
  pA = headA;
  pB = headB;
  while (pA != pB) {
    pA = pA.next;
    pB = pB.next;
  }

  return pA; /**There will always be an intersection */
};

/**
 * let 2 pointers run till they are null or end of ll
 * at a time the shorter pointer will reach first
 * once it reaches point it to the start of the other ll and let keep incrementing
 * now the 2nd pointer after travelling the distance will reach null
 * once it reaches null move to the head of other ll
 * [At this point they will coincide for sure - why becoz it's evident that pB at initial point of (when pA started pointing to longer list)
 * will only travell the difference left - and when we change it falls back to the point they meet]
 * Hence we will not have to calculate length and skip node
 */


```

<img width="1838" height="820" alt="image" src="https://github.com/user-attachments/assets/761f1918-74a3-4e34-a36e-54284243eed2" />


```js
```
