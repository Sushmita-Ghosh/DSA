/**
 * 232. Implement Queue using Stacks https://leetcode.com/problems/implement-queue-using-stacks/description/
 * 
 * 
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.


Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
 */

/**
 * \
 
✅ What changed

Instead of swapping s1 and s2, we now move elements back to s1 after pop/peek.

This preserves the FIFO order.

The pop() removes the “first pushed” element correctly.

peek() now returns the front element without losing it.
 */

var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  /** till n-1 we need to pop and store in s2 */
  let n = this.s1.length;
  console.log(this.s1);
  for (let i = 0; i < n - 1; i++) {
    let element = this.s1.pop();
    this.s2.push(element);
  }

  /** for the last element pop */
  let frontElement = this.s1.pop();

  /** We can't swap here - swapping here will make the queue element reverse 
  FIFO to LIFO */
  /** Instead what we can do is copy back to s2 */
  while (this.s2.length > 0) {
    this.s1.push(this.s2.pop());
  }

  /** return renoved elemen */
  return frontElement;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  /** till n-1 we need to pop and store in s2 */
  let n = this.s1.length;
  for (let i = 0; i < n - 1; i++) {
    let ele = this.s1.pop();
    this.s2.push(ele);
  }

  /** for the last element pop - copy to s2 after storing it in a variable*/
  let peekElement = this.s1.pop();
  this.s2.push(peekElement);

  /** We can't swap here - swapping here will make the queue element reverse 
  FIFO to LIFO */
  /** Instead what we can do is copy back to s2 */
  while (this.s2.length > 0) {
    this.s1.push(this.s2.pop());
  }

  /** return peek element  */
  return peekElement;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/**
 * Better Solution
 *
 * Pop Heavy Solution  amortized O(1)
 *
 *
 * push is just push to s1
 * pop - we have to check if s2 is empty or not - if not empty we just pop from s2 as s2 has the elements in reverse order , the correct order of stack; if it is empty we need to pop all elements from s1 and push to s2 and then pop from s2
 * peek - we have to check if s2 is empty or not - if not empty we just peek (return the top element) from s2 as s2 has the elements in reverse order , the correct order of stack; if it is empty we need to pop all elements from s1 and push to s2 and then peek from s2
 *
 * stack is LIFO - so the last element can be peeked/removed first
 */

/** Time complexity / Worst Time complexity is 0(n) */
/** But average time complexity is O(1) - why ?? As not all the time we are pushing into the other stack */

/** Can you implement using 1 stack - No, the solution would be too complex to implement, it's not similar to what we did when we implemented stack using queue */

var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  /**
            s2 has the elements in correct order(the order we need)
            if s2 is empty- transfer all elements from s1 to s2 then pop
            if not that means we have the just pop the last element
     */
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }

  return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  /**
            s2 has the elements in correct order(the order we need)
            if s2 is empty- transfer all elements from s1 to s2 then return last element
            if not that means we have the just return the last element 
            return the last ele is a valid operation as this is how stack works - LIFO
     */
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2[this.s2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  /** if both are empty */
  return this.s1.length === 0 && this.s2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
