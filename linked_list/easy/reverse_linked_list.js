//  Reverse Linked List

var reverseList = function (head) {
  // initialize two pointers - prev and curr
  let prev = null;
  let curr = head;

  while (curr != null) {
    // save the next node - backup as we will modify curr
    let nextNode = curr.next;
    // reverse the link
    curr.next = prev;
    // move pointers
    prev = curr;
    curr = nextNode;
  }

  return head;
};
