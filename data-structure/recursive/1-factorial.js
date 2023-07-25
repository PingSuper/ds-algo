/*
5! = 5 * 4 * 3 * 2 * 1
*/
function findFactorialRecursive(number) {
  console.log(number);
  if (number === 1) {
    return number;
  }

  return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5));
