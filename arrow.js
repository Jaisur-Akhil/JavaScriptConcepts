/** @format */

//Arrow Function -Es6
//1. Short Syntax
//2. Does not bind its own this

let add = function (a, b) {
  return a + b;
};
console.log(add(10, 20) + 'Output ');
//or
let outputAdd = add(10, 20);
console.log(outputAdd + 'Output from variable');

// arrow function

let adds = (a, b) => a + b;
console.log(adds(10, 20) + 'arrow function output');

let addss = (x, y) => {
  return x + y;
};
