/**
 *https://leetcode.com/problems/implement-stack-using-queues/description/

 USING 2 QUEUES
 *
 * Logic -
 * push - add element to queue 1
 * pop - remove element from queue 1 and add to queue 2 and return element removed from queue 1 , also exchange queue 1 and queue 2 as queue 1 will be empty after pop
 * top -  again remove element from queue 1 and add to queue 2  and return last element from q1 , the add it to q2 (this is the top) , also exchange queue 1 and queue 2 as queue 1 will be empty after pop
 * empty - check if queue 1 is empty
 */

var MyStack = function () {
  /** declaring two queues */
  this.q1 = []; /** main queue */
  this.q2 = []; /** support  */
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  /** enqueue */
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  /** for n-1 elements push it to q2 */
  let n = this.q1.length;
  console.log(n);
  for (let i = 0; i < n - 1; i++) {
    let front = this.q1.shift();
    this.q2.push(front);
  }

  /** remove the last element */
  let ans = this.q1.shift();

  /** swap q1 and q2 as q2 has all elements */
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  /** return the last element */
  return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  /** copy to q2 till n-1 elements by removing elements from q1*/
  let n = this.q1.length;
  console.log(n);
  for (let i = 0; i < n - 1; i++) {
    let front = this.q1.shift();
    this.q2.push(front);
  }

  /** remove the last element - i.e front and then copy that to q2 */
  let top = this.q1.shift();
  this.q2.push(top);
  /** swap q1 and q2 */
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  /** return front */
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
