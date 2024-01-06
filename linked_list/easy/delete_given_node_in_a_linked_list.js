// https://leetcode.com/problems/delete-node-in-a-linked-list/description/

var deleteNode = function (node) {
  // we will make the val to next nodes val
  node.val = node.next.val;
  // we will make the next node to next next
  node.next = node.next.next;

  // 1->2->3->4->null --> and we have to delete 3
  // 1->2->4->4-> null
  //1->2->4 -> null
};
