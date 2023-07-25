// find common items between the arrays
// return true or false

const arr1 = ["a", "b", "c", null];
const arr2 = ["x", "y", "a"];

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }

  return false;
}

console.log(containsCommonItem(arr1, arr2));

// O(a*b)
// O(1) - space complexity

////////////// HASH TABLE ////////////////////////////////////
/*
arr1Obj = {
    a: true, 
    b: true, 
    ...
}
*/
function containsCommonItem2(arr1, arr2) {
  // map arr1 to object (object is the equivalent HashTable DS in JS)
  let arr1Obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!arr1Obj[arr1[i]]) {
      arr1Obj[arr1[i]] = true;
    }
  }
  //console.log(arr1Obj);

  // loop arr2
  for (j = 0; j < arr2.length; j++) {
    if (arr1Obj[arr2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(containsCommonItem2(arr1, arr2));

// O(a+b)
// O(a)  - space complexity
