/** @format */
'use strict';
/*
use strickt was introducted Ecma script v5
secure javascript
In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
Deleting a function is not allowed.
Duplicating a parameter name is not allowed:
Octal numeric literals are not allowed: let x = 010;   
The word eval cannot be used as a variable:
The word arguments cannot be used as a variable:
Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.
it is not a statement but a literal expression
in strict mode you cannot use undeclared variable
it has global scope 
*/

//Function
/* 
function newStart() {
  console.log('Fundamental Part 2');
}
newStart(); //calling function/running function/invoking

function juice(apple, grape) {
  const mixer = `Juice with ${apple} apples and ${grape} grapes`;
  return mixer;
}
console.log(juice(5, 6)); //direct
const glass = juice(2, 4); //save
console.log(glass);
 

//Function Declaration

function calAge(birthyear) {
  return 2022 - birthyear;
}
const age1 = calAge(1998);

//Function Expression

const calcAge2 = function (birthyear) {
  return 2022 - birthyear;
};
const age2 = calcAge2(1998);
console.log(age1, age2);

// Arrow Functions

const calcAge3 = (birthyear) => 2022 - birthyear;
const age3 = calcAge3(1998);
console.log(age3);

const retirement = (birthyear, fn) => {
  const age = 2022 - birthyear;
  const retirement = 65 - age;
  return `${fn} retires in ${retirement} years`;
};

console.log(retirement(1998, 'akhil'));


function cutFruit(fruit) {
  return fruit * 4;
}

function grinder(apple, orange) {
  const piecesA = cutFruit(apple);
  const piecesB = cutFruit(orange);

  const chef = `I prepared a juice with ${piecesA} apple pieces and ${piecesB} oranges`;

  return chef;
}

console.log(grinder(2, 4));
*/

//Array

const friends = ['Akhil1', 'Akhil2', 'Akhil3'];
// console.log(friends[0]);
// console.log(friends[3]); // out of bound value // undefined

const color = new Array('red', 'green', 'blue');
// console.log(color[1]);
// console.log(color[2]);
// console.log(color.length);
// console.log(color[color.length - 1]);

//methods / operations
let friendsNew = friends.push('Krishna');
console.log(friendsNew);
/*

Array.push()	: To add elements to the end of the array.
Array.pop() :	To remove elements from the end of the array.
Array.unshift()	: To add elements to the front of the array
Array.shift() : 	To remove elements from the front of the array.
Array.splice() : 	To add or remove elements from the splice


const poped = friends.pop();
console.log(poped);

const pushed = friends.push('Vishnu');
console.log(pushed);
console.log(friends);

const shift = friends.shift();
console.log(shift);

const unshift = friends.unshift('Ganesh');
console.log(unshift);
console.log(friends);

//index of

console.log(friends.includes('Ganesh'));
console.log(friends.indexOf('Ganesh'));
*/

// Object - like Json
/*
const jSon = ['Akhil', 'Codeing', 'Reading', ['httyd', 'znmd', 'h123']];

const jSonn = {
  Name: 'Akhil',
  fav: 'Coding',
  Hobbie: 'Reading',
  Movies: ['httyd', 'znmd', 'h123'],
};

console.log(jSonn);
//Ways to access Objects
console.log(jSonn.fav);
console.log(jSonn['fav']);

// const intresetedIn = prompt(
//   'what do you want to know about jSonn ? choose between Name , fav , Hobbies , Movies '
// );

// if (jSonn[intresetedIn]) {
//   console.log(jSonn[intresetedIn]);
// } else {
//   console.log(`Nothing like this exist`);
// }

//Add new value to object
jSonn.location = 'Portugal';
jSonn['Twitter'] = '@akhil4555';
console.log(jSonn);
*/

// For Loop
/*
for (let rep = 1; rep <= 5; rep++) {
  console.log('Count ' + rep);
}

const year = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i <= year.length; i++) {
  ages.push(2022 - year[i]);
}
console.log(ages);

//Reverse  for Loop
for (let i = 6; i >= 0; i--) {
  console.log(i);
}

*/

//While Loop
let rep = 1;
while (rep <= 10) {
  console.log('concepts to code ' + rep);
  rep++;
}
