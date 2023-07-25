const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array) {
  if (array.length === 1) {
    return array;
  }
  if (array.length === 2) {
    if (array[0] > array[1]) {
      const temp = array[0];
      arrary[0] = array[1];
      array[1] = temp;
    }
    return array;
  }

  let pivot = array[length - 1];

  let i = -1;
  for (let j = 0; j < array.length - 1; j++) {
    if (array[j] <= pivot) {
      i++;
    }
  }
}

console.log(quickSort(numbers));
