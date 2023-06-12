// printing the elements of linked list
// we will keep a pointer current
// current will point to head first
// then after each iteration - current points to current.next (--> increment one by one till we reach null)
// https://www.youtube.com/watch?v=A-9tzPuE1eA&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=51

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

  print() {
    if (this.isEmpty()) {
      console.log("List is empty!");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        // while curr!== null
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
// console.log("List is empty? ", list.isEmpty());
// console.log("List size ", list.getSize());
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();
console.log("List size ", list.getSize());
