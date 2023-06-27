// Steps
// create a node -> jiske next me null hoga (prepend)
// step 2 -> if the list is empty , the head must point to new node
// step 3 -> list is not empty -> make new node point to the head node -> make the new node as head node

class Node {
  //initialze the node
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value); // step 1
    if (this.isEmpty()) {
      // step2
      this.head = node;
    } else {
      node.next = this.head; // new node er next points to head
      this.head = node; // head points to node
    }
    this.size++;
  }
}

const list = new LinkedList();
console.log("List is empty? ", list.isEmpty());
console.log("List size ", list.getSize());
