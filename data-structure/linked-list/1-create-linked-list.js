// 10 -> 5 -> 16

/* const myLinkedList = {
    value: 10, 
    next: {
        value: 5, 
        next: {
            value: 16, 
            next: null
        }
    }
} */

class MyNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (!this.validateIndex(index)) {
      console.log("Index is out of range.");
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

  prepend(value) {
    const head = new MyNode(value, this.head);
    this.head = head;
    this.length++;

    if (this.length === 1) {
      this.tail = this.head;
    }
  }

  append(value) {
    const node = new MyNode(value, null);

    if (this.length === 0) {
      this.prepend(value);
      return;
    }

    this.tail.next = node;
    this.tail = node;
    this.length++;
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

    let newNode = new MyNode(value, null);

    let node;
    for (let i = 0; i < this.length; i++) {
      node = i === 0 ? this.head : node.next;

      if (i === index - 1) {
        const nextNode = node.next;
        node.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return;
      }
    }
  }

  delete(index) {
    if (!this.validateIndex(index)) {
      console.log("Index is out of range.");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let node;
    for (let i = 0; i < this.length; i++) {
      node = i === 0 ? this.head : node.next;

      if (i === index - 1) {
        const nextNode = node.next;
        node.next = nextNode.next;

        if (nextNode.next === null) {
          this.tail = node;
        }
        //delete nextNode;
        this.length--;
        return;
      }
    }
  }

  validateIndex(index) {
    return index < 0 || index > this.length - 1 ? false : true;
  }

  reverse() {
    const list = new MyLinkedList();
    if (this.length < 1) {
      return list;
    }

    let node;
    for (let i = 0; i < this.length; i++) {
      node = i === 0 ? this.head : node.next;
      list.prepend(node.value);
    }
    return list;
  }

  printList(list) {
    const array = [];
    let node;
    for (let i = 0; i < list.length; i++) {
      node = i === 0 ? list.head : node.next;
      array.push(node.value);
    }
    console.log(array);
  }
}

const myLinkedList = new MyLinkedList();
//console.log(myLinkedList);

myLinkedList.prepend("a");
//console.log(myLinkedList);

/* myLinkedList.prepend("b");
console.log(myLinkedList); */

myLinkedList.append("b");
//console.log(myLinkedList);

myLinkedList.append("c");
console.log(myLinkedList);

//console.log(myLinkedList.get(5));

myLinkedList.insert("1", 1);
console.log(myLinkedList);

//myLinkedList.delete(0);
//console.log(myLinkedList);

//myLinkedList.delete(2);
//console.log(myLinkedList);

myLinkedList.printList(myLinkedList);
myLinkedList.printList(myLinkedList.reverse());
