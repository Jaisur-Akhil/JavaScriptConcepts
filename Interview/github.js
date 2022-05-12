/** @format */

// object
const obj = new Object();
const object = { name: 'akhil', age: '16' };

//prototype chaining - object
//prototype chaining is used to build new type of object based on the exisitng one

/* //call apply bind *Imp
var emp1 = { fn: 'akhil', ls: 'jaisur' };
var emp2 = { fn: 'akhil2', ls: 'jaisur' };
var emp3 = { fn: 'akhil3', ls: 'jaisur' };

function invite(greet1, greet2) {
  console.log(greet1 + ' ' + this.fn + ' ' + this.ls + ',' + greet2);
}
invite.call(emp1, 'hi', 'How are you');

//Apply
invite.apply(emp2, ['eh , wasssapp', 'how ya doing ?']);

//bind
var inviteBind = invite.bind(emp3);
inviteBind('Hi', 'busy i am busy will call you back');

*/

//json -
/* 
//Json is text based data format following js object , keyy value pair , easy integrations with react and nodejs

let b = JSON.parse('{ "hey": "hi", "Thankyou": "Welcome" }');
console.log(b.hey);

let toStr = { name: 'Ram', age: 9 };
var myJson = JSON.stringify(toStr);
console.log(myJson);
*/

//slice method - its is used to slice or to get any perticular part of string or array . It is based on indexing of array/string. first argument is starting point and last argument is ending point. it eliminates the last element.  if the last argument is not mention slice understand it has to trace it till last element

let sliceEx = [1, 2, 3, 4, 5];
let s = sliceEx.slice(0, -4);
// console.log(s);

//splice method
/*
let spliceEx = [1, 2, 3, 4, 5];
let spRem = spliceEx.splice(2, 2);
console.log(spliceEx);
console.log(spRem);
let spAdd = spliceEx.splice(3, 1, 2, 3, 4);
console.log(spliceEx);
console.log(spAdd);
*/

//axios
/*
const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  console.log(response.data);
});
*/

//map
/*
var a = [2, 9, 25, 14, 87];

let b = a.map(function (value, index) {
  return { key: index, value: value * value };
});
console.log(b);

*/

// == value , === value +datatype
/*
0 === false;
0 == false;
1 == '1';
1 === '1';
// [] ==[] , === f reference to  different objects in memory
//{} == {} === f reference to  different objects in memory

if (1 === '1') {
  console.log(true);
}
*/

function name() {}
// function(){}
const a = () => {};

//first class function* - are treated like other varaiables , can be passed as argument to other function
//first order function* - dnt accept any other function in argument , doesnt return function
//Higer Order function**
// HOF is the function that accepts other fucn as an argument and return a value
const primary = () => {
  console.log('I am from primary');
};
const secondary = (primary) => {
  primary();
};

// secondary(primary);

// unary function
let p = (b) => {
  return b + 10;
};
console.log(p(4));

//Pure function

// not dependable on any external varibale
// should not mutate any other varibale

const maths = (args) => {
  return args + 90;
};
maths(50);

const gst = (productvalue) => {
  return productvalue * 0.05;
};
gst(50);

// impure

let pm = 'NM';
const India = (pm) => {
  let population;
  pm = 'Modi'; // trying to change variable out of its scope
  console.log(pm); // depended
  population += 1; //side effect by chainging its value
};
// India(pm);

//let || es6 || block scope || Hoisted - Declare
//var || traditionally || function scope || hoisted || dec is hoisted , innitialization is not

//innitialize  , declaration
//Hoisting

//Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation
// In JavaScript, a variable can be declared after it has been used.
// let f; //decla
// f = 60; // initialize
g = 'Hello World';
console.log(g);
var g;

//Switch block
/*
switch (x) {
  case 0: {
    let name;
    break;
  }
  case 1:
    let name;
    break;
  default:
    break;
}
 */
/*
//Temporal Dead Zone - time stamp between
// console.log(epi, epsi); //accessing variables before
const epi = 10;
const epsi = 20; // creation of variables binding and its declaration

// iife immidiate invoke function expression
(function () {
  console.log('this is IIFE');
})(); //variable inside IIFE is scoped and secure cannot be used outside


//Encoding decoding Base64
let str = 'Hello People';
let enc = btoa(str);
let dec = atob(enc);
console.log(enc);
console.log(dec);
*/

// Memoization

const mem = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log('Fetching from Cache');
      return cache[value];
    } else {
      console.log('calculating');
      let result = 20 + value;
      cache[value] = result;
      return result;
    }
  };
};

// const add = mem();
// console.log(add(20));
// console.log(add(30));
// console.log(add(20));
// console.log(add(20));

//Classess in Es6
//before
function bike(model, color) {
  this.model = Ducati;
  this.color = Red;
}
bike.prototype.getDetails = function () {
  return this.model + ' ' + this.color;
};
//after

class Bike {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
  get detail() {
    return this.model + ' ' + this.color;
  }
}

const B = new Bike('Ducati', 'Red');
// console.log(B);

//Closures - Multiple nested blocks/functions/conditions - accessibility of variables || Scope

let randomee = 'Hello';
const birthday = () => {
  console.log(randomee);
  var greet = 'Today is my birthday';
  let BirthdayBoy = () => {
    console.log(greet);
  };
  BirthdayBoy();
};

birthday();
