/* const mydblLinkedList = {
    value: 1, 
    perv: null,
    next: {
        value: 2, 
        perv: {
            value: 1, 
            perv: null, 
            next: {}
        }
        next: {
            value: 3,
            perv: {} 
            next: null
        }
    }
} */

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    const node = new Node(value, null, null);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
    return;
  }

  append(value) {
    if (this.length === 0) {
      this.prepend(value);
      return;
    }

    const node = new Node(value, this.tail, null);

    this.tail.next = node;
    this.tail = node;
    this.length++;
    return;
  }

  get(index) {
    if (!this.validateIndex(index)) {
      console.log("Index is out of range.");
      return;
    }

    let node;
    for (let i = 0; i < this.length; i++) {
      node = i === 0 ? this.head : node.next;

      if (i === index) {
        return node.value;
      }
    }
    return undefined;
  }

  insert(value, index) {
    if (!this.validateIndex(index)) {
      console.log("Index is out of range.");
      return;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    const node = new Node(value, null, null);
    const prevNode = this.traverseToIndex(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = node;
    node.prev = prevNode;
    node.next = nextNode;
    nextNode.prev = node;
    this.length++;
    return;
  }

  delete(index) {
    if (!this.validateIndex(index)) {
      console.log("Index is out of range.");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return;
    }

    const nodeToDel = this.traverseToIndex(index);
    const nextNode = nodeToDel.next;
    const prevNode = nodeToDel.prev;

    prevNode.next = nextNode;
    if (!nextNode) {
      nextNode.prev = prevNode;
    }
    this.length--;
    return;
  }

  validateIndex(index) {
    return index < 0 || index > this.length - 1 ? false : true;
  }

  traverseToIndex(index) {
    for (let i = 0; i < this.length; i++) {
      node = i === 0 ? this.head : node.next;

      if (i === index) {
        return node;
      }
    }
  }
}

const myDoubleLinkedList = new DoubleLinkedList();
myDoubleLinkedList.prepend("a");
myDoubleLinkedList.prepend("b");
//console.log(myDoubleLinkedList);

myDoubleLinkedList.append("c");
console.log(myDoubleLinkedList);
