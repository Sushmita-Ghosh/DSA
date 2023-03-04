// Class with a get and set method

// Write a class with a get and set method to store data. The class should have an instance variable data to store the data. The get method should return the stored data, and the set method should set the stored data to a given value.

// Example 1:

// Input:
//  ["DataStorage", "get", "set"]
//  [[22], [], [22]]Output: [null, 22, null]
// Explanation:

class DataStorage {
  /**
   * @param {number} data
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * @return {number}
   */
  get() {
    // Your code goes here
    return this.data;
  }

  /**
   * @param {number} value
   * @return {void}
   */
  set(value) {
    // Your code goes here
    this.data = value;
  }
}
