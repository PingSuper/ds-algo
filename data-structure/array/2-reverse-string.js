// create a function that reverses a string
// eg. 'Hi my name is' should be
// 'si eman ym iH'

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    console.log("input is invalid");
    return;
  }
  const backwards = [];
  const length = str.length - 1;

  for (let i = length; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

const test = "Hi my name is";
console.log(reverse(""));
console.log(reverse(test));

function reverse2(str) {
  // Todo: Validate input param

  return str.split("").reverse().join("");
}

console.log(reverse2(test));
