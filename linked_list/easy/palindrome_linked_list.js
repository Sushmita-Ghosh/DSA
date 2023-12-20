// https://leetcode.com/problems/palindrome-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// We are already given a linkedlist we will not write the code
var isPalindrome = function (head) {
  let string1 = (string2 = "");

  let node = head; // same as current for traversing

  while (node) {
    string1 = `${string1}${node.val}`;
    string2 = `${node.val}${string2}`; // storing from back
    node = node.next;
  }

  return string1 === string2;
};
