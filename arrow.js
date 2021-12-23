/** @format */
// Es6 arrow function provides you with an alternative way to write a shorter syntax compared to function expression

//example : regular function expression

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

//significant advantage is it does not bind its own this.In other words , the context inside arrow function is lexically or statically defined .

//that means

//Unlike other function, the value of this inside arrow function is not dependent on how they are invoked or how they are defined . It depends only on its enclosing context
