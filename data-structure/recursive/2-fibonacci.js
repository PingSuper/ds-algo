/*
Given a number N return the index value of Fibonacci sequence.

that is each number is the sum of the 2 previous values...

0, 1, 1, 2, 3, 5, 8, 13, ...

f(n-1)
*/

function fibonacciRecursive(n) {
  // O(2^n)
  /*
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  */
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

console.log(fibonacciRecursive(6));

function fibonacciIterative(n) {
  const sequence = [0, 1];
  if (n === 0 || n === 1) {
    return sequence[n];
  }
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  return sequence[i];
}

//console.log(fibonacciIterative(6));
