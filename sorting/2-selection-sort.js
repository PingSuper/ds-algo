const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(numbers) {
  if (!numbers || numbers.length <= 1) {
    return numbers;
  }

  let minNum;
  for (let i = 0; i < numbers.length - 1; i++) {
    minIndex = i;

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[minIndex]) {
        minIndex = j;
      }
    }
    let temp = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp;
  }
  return numbers;
}

console.log(selectionSort(numbers));
