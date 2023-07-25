const arr = ["a", "b", "c", "d"];

// Lookup
console.log(arr[0]); // O(1)

// Push
arr.push("e");

// Pop
arr.pop();

// Insert to the head
arr.unshift("x");

// Remove the first item
arr.shift();

// Insert
arr.splice(2, 0, "splice");

// Delete

console.log(arr);
