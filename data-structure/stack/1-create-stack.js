class Stack {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
    return;
  }

  pop() {
    if (this.array.length === 0) {
      return undefined;
    }
    return this.array.pop();
  }

  peek() {
    if (this.array.length === 0) {
      return undefined;
    }
    return this.array[this.array.length - 1];
  }
}
