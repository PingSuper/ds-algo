// Merge sorted arrays
// input: [0, 3, 4, 31], [4, 6, 30]
// output: [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArray(arr1, arr2) {
  if (!arr1 && !arr2) {
    console.log("both arr1 and arr2 are invalid.");
    return;
  }
  if (!arr1) {
    return arr2;
  }
  if (!arr2) {
    return arr1;
  }

  const sortedArray = [];
  let arr1Index = 0;
  let arr2Index = 0;
  let maxIndex = arr1.length > arr2.length ? arr1.length : arr2.length;

  while (arr1Index < maxIndex && arr2Index < maxIndex) {
    const value1 = arr1[arr1Index];
    const value2 = arr2[arr2Index];

    if (value1 <= value2 || value2 === undefined) {
      sortedArray.push(value1);
      arr1Index++;
    } else if (value2 < value1 || value1 === undefined) {
      sortedArray.push(value2);
      arr2Index++;
    }
  }

  return sortedArray;
}

//mergeSortedArray(null, null);

console.log(mergeSortedArray([0, 3, 4, 31], [4, 6, 30]));

console.log(mergeSortedArray([0, 3, 4, 31], [2]));
