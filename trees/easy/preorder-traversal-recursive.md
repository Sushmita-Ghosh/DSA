<img width="1452" height="450" alt="image" src="https://github.com/user-attachments/assets/5be58269-092c-431a-a41a-8b571999fd95" />

---

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let ans = [];
  function traversal(curr) {
    // root -> left -> right
    if (!curr) return null;
    ans.push(curr.val);
    traversal(curr.left);
    traversal(curr.right);
  }
  traversal(root);
  return ans;
};
```
