const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  //console.log(array);

  if (array.length <= 1) {
    return array;
  }

  // Split Array into left and right
  let [arrayL, arrayR] = splitArray(array);

  // Merge Sort Array
  arrayL = mergeSort(arrayL);
  arrayR = mergeSort(arrayR);

  // Merge Array left and right
  const sortedArray = mergeArray(arrayL, arrayR);

  console.log(sortedArray);
  return sortedArray;
}

function splitArray(array) {
  const middle = Math.floor(array.length / 2);
  const result = [];
  result.push(array.slice(0, middle));
  result.push(array.slice(middle));
  return result;
}

function mergeArray(arrayL, arrayR) {
  let l = 0;
  let r = 0;
  const merged = [];

  while (true) {
    //console.log(l, r);
    if ((l < arrayL.length && r >= arrayR.length) || arrayL[l] <= arrayR[r]) {
      merged.push(arrayL[l]);
      l++;
    } else {
      merged.push(arrayR[r]);
      r++;
    }

    if (l >= arrayL.length && r >= arrayR.length) {
      break;
    }
  }

  return merged;
}

//console.log(mergeArray([44, 99], [6]));

//console.log(splitArray([1, 2, 3]));

console.log(mergeSort(numbers));
