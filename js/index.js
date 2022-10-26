const { odd, even } = require("./var");
const checkOddOrEven = require("./func");

const checkStringOddOrEven = (str) => {
  if (str.length % 2) {
    return odd;
  }
  return even;
};

console.log(checkOddOrEven(10));
console.log(checkStringOddOrEven("hi"));
