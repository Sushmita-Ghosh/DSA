/**
 * 
 * 
 * https://leetcode.com/problems/min-stack/description/
 * 155. Min Stack
Medium
Topics
premium lock icon
Companies
Hint
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.
 */

/**===============================================SOLUTION=============================================== */

/**
 * The only trick is that you'll have top recalculate the min value when pushing a new value
 * otherwise it cannot be done in constant time
 */

var MinStack = function () {
  this.s = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  /** While pushing a each step you need to store the min value
    [val, minVal] */

  if (this.s.length === 0) {
    this.s.push([val, val]);
  } else {
    /** you need to calculte the min bewteen the current val & last min */
    /** last min is the value at length of stack  & 1st posn */
    // Math.min(current val, prev min)
    let prevMinVal = this.s[this.s.length - 1][1];
    let minVal = Math.min(val, prevMinVal);
    this.s.push([val, minVal]);
  }
};

/**
 * @return {void}
 => no need to return as void
 */
MinStack.prototype.pop = function () {
  this.s.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.s[this.s.length - 1][0]; // value is 0th place
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1]; // minval is at 1st place
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
 * Time Complexity: O(1)
 * Space Complexity: O(n) // where n is the number of elements in the stack
 */
