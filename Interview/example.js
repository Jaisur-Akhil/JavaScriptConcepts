/** @format 

var emp1 = { fn: 'akhil', ls: 'jaisur' };
var emp2 = { fn: 'akhil2', ls: 'jaisur2' };
var emp3 = { fn: 'akhil3', ls: 'jaisur3' };

function invite(greet1, greet2) {
  console.log(greet1 + ' ' + this.fn + ' ' + this.ls + ', ' + greet2);
}

invite.call(emp1, 'Hi', 'How are you');
invite.apply(emp2, ['Eh', 'Wadaapp']);

let inviteBind = invite.bind(emp3);
inviteBind('pretty ', 'Javascript');



//('{object}')

let a = JSON.parse('{ "name": "Akhil", "age": "90" }');
// console.log(a.name);

// slice
let sliceExample = [0, 1, 2, 3, 4, 5, 6, 7];
let newslice = sliceExample.slice(-3, -1);
// console.log(newslice);

//Splice
let spliceEample = [0, 1, 2, 3, 4, 5];
let newsplice = spliceEample.splice(0, 3); // removed
console.log(newsplice);
console.log(spliceEample);

let newSp = spliceEample.splice(0, 1, 1, 2, 3); //add
console.log(newSp);
console.log(spliceEample);
//
*/
// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let b = x.map(function (value, index) {
//   return { key: index, value: value * value };
// });
// console.log(b);

var rob1 = { name: 'arusha', age: '16' };
var rob2 = { name: 'Akanksha', age: '18' };
var rob3 = { name: 'Anarkali', age: '19' };

function invite(greet1, greet2) {
  console.log(greet1 + ' ' + this.name + ' ' + this.age + ' ' + greet2);
}

// invite.call(rob1, 'Hi', 'Hello');
// invite.apply(rob2, ['Hello', 'i can drink']);

// let InviteBind = invite.bind(rob3);
// InviteBind('Supppp', 'I ll  be 20 soon');

//call . apply  . bind  this
//Hi arusha 16 how are you

// slice - new object , immutable ,Indexing, range , Extract
// splice - same object , mutable ,Indexing, add/remove  , Remove- output

/*
let rusha = [0, 1, 2, 3, 4, 5, 6, 7];
let x = rusha.splice(3, 3); //remove
console.log(x);
console.log(rusha);

let y = rusha.splice(3, 2, 3, 4, 5); //add
console.log(y);
console.log(rusha);

3, 2, 3, 4, 5;
//3 starting position
//2 no of element to remove
// other to be added
*/

let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = a.map(function (value, index) {
  return { key: index, value: value * value };
});

// console.log(b);

//first class function function - variable , agement in other function , return value
//fiirst order function - wont accept any argguemnt , doesnt return a value
//HOC - can take another function as an arugnet , reutrn a value
const n = () => {
  console.log('I am primary');
};
const m = (n) => {
  n();
};

m(n);

const curryMulti = (a, b, c) => a + b + c;
console.log(curryMulti(1, 2, 3));

const curryUnary = (a) => (b) => (c) => a + b + c;
curryUnary(1);
curryUnary(2, 3);
curryUnary(4, 5, 6);
console.log(curryUnary(1));
console.log(curryUnary(2)(3));
console.log(curryUnary(4)(5)(6));

//memo

const meme = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log('from cache ');
      return cache[value];
    } else {
      console.log('calculating');
      let result = 10 + value;
      cache[value] = result;
      return result;
    }
  };
};

const ad = meme();
console.log(ad(20));
console.log(ad(30));
console.log(ad(40));
console.log(ad(20));

let aa = 'some text';
let ab = () => {
  console.log(aa);
  let ac = 'Poetry';
  let ad = () => {
    console.log(ac);
  };
  ad();
};
ab();
