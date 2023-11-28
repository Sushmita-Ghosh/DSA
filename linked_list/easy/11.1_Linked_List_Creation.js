// Create a linked List and add values
// value, next  -> the tail will have last node  -> next -> nextnode -> uske next me next node

// Benefit over arrays: the list elements can be easily inserted/ removed without realocation or
//  reorganizationof the entire structure
// items do not have to be stored in contiguous memory
// cons: Random access of elements is not feasible -> accessing an elemnt has linear time complexity

// https://www.youtube.com/watch?v=Tggvw4QlA9U&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=49

class Node {
  //initialze the node
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// class LinkedList to track tail , head, size

class LinkedList {
  constructor() {
    this.head = null; // at very beginning the list is empty -> so head pointer points to null
    this.size = 0; // calcultes / stores the size of the linked list
  }

  isEmpty() {
    // method to declare if class is empty or not
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const list = new LinkedList();
console.log("List is empty? ", list.isEmpty());
console.log("List size ", list.getSize());
