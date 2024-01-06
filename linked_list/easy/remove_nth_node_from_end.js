// we cannot traverse the linkedlist from the end
// remove nth node from end = remove length-n node from curr

// Brute Force
var removeNthFromEnd = function (head, n) {
  // empty list
  if (head === null) {
    return head;
  }

  let curr = head;
  let count = 0;

  // calculate length
  while (curr !== null) {
    count++;
    curr = curr.next;
  }

  // remove head  when count is equal to n , suppose n=5 and count=5 then we have to remove head
  if (count === n) {
    head = head.next;
    return head;
  }

  curr = head;
  let prevIndex = count - n - 1;
  count = 0;

  // traverse till prevIndex and make the curr.next = curr.next.next
  for (let i = 0; i < prevIndex; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;

  return head;
};

// Two Pointer Approach

var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) {
    // if fast is null, then we have to remove head (same count == n)
    return head.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return head;
};
