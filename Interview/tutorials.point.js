/**
 * /*
 * JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.
 *
 * disadvantage of Js
 * We can not treat JavaScript as a full fledged programming language. It lacks the following important features −
 *
 * Client-side JavaScript does not allow the reading or writing of files. This has been kept for security reason.
 *
 * JavaScript can not be used for Networking applications because there is no such support available.
 *
 * JavaScript doesn't have any multithreading or multiprocess capabilities.
 *
 * @format
 

//Create an Object in js

let objectCreation = { username: 'root', passsword: 123456 };
console.log(objectCreation.passsword);

//create array in js

let emptyArray = [];
let contentArray = [1, 2, 3, 4, 5, 6];

//read elements of array
for (var i = 0; i < contentArray.length; i++) {
  console.log(contentArray[i], ' this is the current value of iterator');
}

//define anonymous function

let anonymousfuc = function () {
  console.log('this is anonymous function');
};
anonymousfuc();

//callback - A callback is a function passed as an argument to another function..

const callbackExample = (sum) => {
  console.log('This is callback calculatorrrrr ' + sum);
};
const cal = (n1, n2, callbackExample) => {
  let sum = n1 + n2;
  callbackExample(sum);
};
// cal(5, 5, callbackExample);

//settimeout example - asynchronous
const sett = () => {
  console.log('This is set time out example');
};
console.log('before set time out ');
setTimeout(sett, 3000);
console.log('wait for 3 sec function is running');
setTimeout(sett, 3000);
console.log('again wait for 3 sec function is running');

//playing with dates
let d = new Date();
console.log(d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

//promise

/*
Promise Object Properties
A JavaScript Promise object can be:

Pending
Fulfilled
Rejected
The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.


let mypromise = new Promise(function (resolve, reject) {
  let x = 1;
  if (x == 0) {
    resolve('Ok'); // message - passed to then / catch
  } else {
    reject('condition false');
  }
});

mypromise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

var promise = new Promise(function (resolve, reject) {
  const x = 'geeksforgeeks';
  const y = 'geeksforgeeks';
  if (x === y) {
    resolve('This is passing');
  } else {
    reject('This is failing ');
  }
});

promise
  .then((message) => {
    console.log('Success, You are a GEEK' + message);
  })
  .catch((message) => {
    console.log('Some error has occurred' + message);
  });


//async await  example 1
const asyncAwait = async () => {
  console.log('this is best example for a quick async await');
  const a = await asyncAwait;
  console.log(a);
};
// asyncAwait();

setTimeout(asyncAwait, 2000);



//char at
const a = "'1', ' 2', ' 3', ' 4', ' 5', '6'";

let b = a.charAt(1);
console.log(b);

const c = [1, 2, 3, 4, 5, 6];
console.log(c.indexOf(3));
*/