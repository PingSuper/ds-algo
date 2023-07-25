class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value, null, null);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let node = this.root;
    let parentNode;
    let isLeft;
    while (node) {
      parentNode = node;
      isLeft = node.value >= value;
      node = isLeft ? node.left : node.right;
    }

    if (isLeft) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }
  }

  lookup(value) {
    let node = this.root;
    while (node) {
      if (value === node.value) {
        return node;
      } else if (value < node.value) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return undefined;
  }

  remove(value) {}

  printTree() {
    console.log(JSON.stringify(this.root));
    return;
  }
}

const myBST = new BinarySearchTree();
myBST.insert(10);
myBST.insert(9);
myBST.insert(20);
myBST.insert(15);

//console.log(myBST);
//myBST.printTree();

console.log(myBST.lookup(10));
console.log(myBST.lookup(15));
console.log(myBST.lookup(7));
