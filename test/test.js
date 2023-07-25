const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
  array.forEach((e) => {
    array.forEach((x) => {
      console.log(e + ", " + x);
    });
  });
}

logAllPairsOfArray(boxes);
