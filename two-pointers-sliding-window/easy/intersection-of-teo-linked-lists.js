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
    let diff = Math.abs(n - m)

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
        pB = pB.next
    }

    return pA /**There will always be an intersection */


};


