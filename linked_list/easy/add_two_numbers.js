// https://leetcode.com/problems/add-two-numbers/description/

// Reverse order is okay - as units to units - from left side to right side

var addTwoNumbers = function (l1, l2) {
  // creating a dummy node to store the result
  let dummy = new ListNode();
  // creating a reference to the current node
  let current = dummy;
  // creating a carry variable
  let carry = 0;

  // for the last iteration if there is carry we will still need to execute the loop
  while (l1 !== null || l2 !== null || carry > 0) {
    var val1 = l1 !== null ? l1.val : 0;
    var val2 = l2 !== null ? l2.val : 0;

    // add the values and carry
    var sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10); // to get the carry
    sum = sum % 10; // to get only 1 digit the other is carry

    // store the sum and update the pointers
    current.next = new ListNode(sum);
    current = current.next;

    // traverse to the next node
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next; // dummy.next is the head as first node is 0 so next will be the head
};
