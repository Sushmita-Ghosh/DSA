// https://www.youtube.com/watch?v=3e6Xfnr5ME8&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=52
// append a node at the end of the list
// we take a point prev and we stop it just when prev.next it is not null  i.e last node
// make prev point to node

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

  // this is the method
  append(value) {
    //create a node
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head; // points to head
      while (prev.next !== null) {
        prev = prev.next;
      }
      prev.next = node;
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
list.append(10);
list.append(20);
list.append(30);
list.print();
console.log("List size ", list.getSize());
console.log(list);
