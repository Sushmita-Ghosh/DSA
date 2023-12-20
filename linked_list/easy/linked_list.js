class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // at very beginning the list is empty -> so head pointer points to null
  }

  addFirst(data) {
    //create a new node
    const newNode = new Node(data);
    // point the new node next to current head
    newNode.next = this.head;
    // point the head to the new node
    this.head = newNode;
  }

  addLast(data) {
    // create a new node
    const newNode = new Node(data);
    // if list is empty, or if head is pointing to null then simple assign the new node to head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // if list is not empty, then find the last node which is pointing to null and
    //  point it to the new node

    // take a variable current which points to head
    let current = this.head;

    // traverse the list, while current.next is not pointing to null
    while (current.next) {
      current = current.next;
    }

    // point the last node to the new node
    current.next = newNode;
  }

  size() {
    // to calculate the size of the list, traverse the list and count the number of nodes

    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  addAt(index, data) {
    //   check if the index is valid
    if (index < 0 || index > this.size()) {
      console.error("Invalid index");
      return;
    }

    // create a new node
    const newNode = new Node(data);

    // if the index is 0, then add the node at the beginning
    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    // if the index is not 0, then traverse the list to find the node
    // need to go till before the index and point next of newnode to that node
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  removeTop() {
    // if list is empty, then return an error
    if (!this.head) {
      console.error("List is empty");
      return;
    }

    // if list is not empty, then remove the top node - point the head to the next node
    // which will be there in head next
    this.head = this.head.next;
  }

  removeLast() {
    // if list is empty, then return an error
    if (!this.head) {
      console.error("List is empty");
      return;
    }

    // traverse the list to  node preceding the last node
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    // point the last node to null
    current.next = null;
  }

  removeAt(index) {
    // if index is invalid
    if (index < 0 || index >= this.size()) {
      console.error("Invalid index");
      return;
    }

    // if index is 0

    if (index == 0) {
      this.head = this.head.next;
      return;
    }

    // if index is not 0, then traverse the list to find the node

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.addFirst(5);
linkedList.addFirst(3);
linkedList.addFirst(8);
linkedList.addLast(10);

linkedList.print();
console.log("Size:", linkedList.size());

linkedList.removeTop();

linkedList.addAt(2, 7);

linkedList.removeLast();
linkedList.print();
console.log("Size:", linkedList.size());
