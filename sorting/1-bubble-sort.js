const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSorting(numbers) {
  if (!numbers || numbers.length <= 1) {
    return numbers;
  }

  let tempNumber = null;
  for (let j = 0; j < numbers.length - 1; j++) {
    for (let i = 0; i < numbers.length - 1 - j; i++) {
      if (numbers[i] > numbers[i + 1]) {
        tempNumber = numbers[i + 1];
        numbers[i + 1] = numbers[i];
        numbers[i] = tempNumber;
      }
    }
  }
  return numbers;
}

console.log(bubbleSorting(numbers));
