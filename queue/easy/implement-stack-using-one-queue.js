/**
 *https://leetcode.com/problems/implement-stack-using-queues/description/

 */

/**
 *
 * Logic - The only diff with the 2 queue approach is that
 * we need to shift(remove from front) and push the elements to the back of the same queue.
 */

var MyStack = function () {
  this.q1 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  /** shift and push it to back till n-1 */
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    let front = this.q1.shift();
    this.q1.push(front);
  }

  /** shift and get the last element */
  let front = this.q1.shift();

  /** return */
  return front;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  /** shift and push it to back till n-1 */
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    let front = this.q1.shift();
    this.q1.push(front);
  }

  /** shift and  get the front ele */
  let top = this.q1.shift();

  /** push it to q1 - otherwise we will loose it */
  this.q1.push(top);

  /** return top */
  return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
