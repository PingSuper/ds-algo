class MyArray {
  constructor() {
    this.length = 0;
    this.data = {}; //* */
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  delete(index) {
    if (index > this.length - 1) {
      console.log("index is out of array range.");
      return;
    }
    this.shiftItems(index);
    this.length--;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}

const array = new MyArray();
//console.log(array.get(0));

array.push("you");
array.push("are");
array.push("nice");
array.push("!!");

array.pop();

array.delete(3);
array.delete(0);

console.log(array);
