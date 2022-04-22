/**
 * /*
 * 
 * document.writeln(str.charAt(4));  === console.log(...) 
 * 
 * JavaScript was initially called Mocha
 * 
 * 
 * 
 * JavaScript is a client-side and server-side scripting language inserted into HTML pages and is understood by web browsers.
 * ------------
 * JavaScript is a scripting language JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.
 *
1. Speed: JavaScript is very fast because it is executed on the client side.
2. Simplicity: JavaScript is relatively simple and easy to learn.
3. Versatility: means having a wide variety of skills. JavaScript can be used in a wide variety of applications regardless of the file extension of web pages.
4. Server Load: As JavaScript executes on the client side it reduce the server load.
Feedback to the visitors is immediate



 * disadvantage of Js

1. Security: As JavaScript executes on the client side it can be used to exploit the application.
2. UI inconsistency: Sometimes JavaScript is interpreted differently by different browsers resulting in the inconsistent UI.
3.  JavaScript doesn't have any supoort multithreading or multiprocess capabilities.
 * We can not treat JavaScript as a full fledged programming language. It lacks the following important features −
 *
 * Client-side JavaScript does not allow the reading or writing of files. This has been kept for security reason.
 *
 * JavaScript can not be used for Networking applications because there is no such support available.
 *
 *
 *
 * @format
//return type of null is object 

// The == operator checks equality only whereas === checks equality and data type.

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

//cookie 

 cookie is a piece of data stored on your computer to be accessed by your browser. You also might have enjoyed the benefits of cookies knowingly or unknowingly. Have you ever saved your Facebook password so that you do not have to type it every time you try to login? If yes, then you are using cookies. Cookies are saved as key/value pairs.

document.cookie = "cookiename=cookievalue"
document.cookie = 'key1= value1; key2 = value2 ; expires = date';
document.cookie = 'key1 = value1; key2 = value2; expires = date';
document.cookie = "cookiename=cookievalue; expires= Thu, 21 Aug 2014 20:00:00 UTC"

To delete a cookie, you just need to set the cookie’s value to empty and set the value of expires to a passed date.

//redirect a url in javascript
<html>
  <head>
    <script type=text/javascript> windows.location = "url"</script>
  </head>
</html>;


//data types - premmitive & Non premitive
//Premitive - string , number , boolean , bigint , undefined , null , symbol
//Non Premitive - object , array .

var obj = { name: 'akhil', age: 24 };
var arr = [12, 34, 56, 78];
console.log(10 + 20 + '30');
console.log('10' + 20 + 30); // it feels everything is string

//event.preventDefault() , event.stopPropagation
// In JavaScript, the event.preventDefault() method is used to prevent the default behavior of an element.
// On the other hand, the event.stopPropagation() method is used to stop the propagation of an event or stop the event from occurring in the bubbling or capturing phase.

//This is a three-dimensional array. - var myArray = [[[]]];

//View State , Session state
//"View state" is specific to a page in a session whereas "Session state" is specific to a user or browser that can be accessed across all pages in the web application.

//popup box in js - alert , confirm , prompt

// OS of the client machine using JavaScript - navigator.appVersion

//JavaScript debugger keyword sets the breakpoint through the code itself. The debugger stops the execution of the program at the position it is applied. Now, we can start the flow of execution manually. If an exception occurs, the execution will stop again on that particular line.. For example:

const de_bug = () => {
  let x = 20;
  let y = 30;
  z = x + y;
  debugger
  console.log(z);
//   console.log(a);
};
de_bug();


//Strict Mode
//trict Mode adds certain compulsions to JavaScript. Under the strict Mode, JavaScript shows errors for a piece of code, which did not show an error before, but might be problematic and potentially unsafe. Strict Mode also solves some mistakes that hamper the JavaScript engines from working efficiently.


'use strict'; // throws error when strict , it is used to avoid errors and apply few strict rules for better coding practice and prevent future errors
x = 20;
console.log(x);

//The onload function is not run until all the information on the page is loaded. This leads to a substantial delay before any code is executed.

onDocumentReady loads the code just after the DOM is loaded. This allows early manipulation of the code.


// '', 0, null, undefined, NaN, false - falsy values

// Hoisting is the default behavior of JavaScript where all the variable and function declarations are moved on top. And we dont get any error of declaration
hoistedVariable = 12;
console.log(hoistedVariable); // outputs 12 even when the variable is declared after it is initialized
var hoistedVariable;



// The delete keyword is used to delete the property as well as its value.
var student = { age: 20, batch: 'ABC' };
console.log(student.age, 'before delete');
delete student.age;
console.log(student.age, 'after delete');


// escape characters
// Escape characters (Backslash) is used when working with special characters like single quotes, double quotes, apostrophes, and ampersands. Place backslash before the characters to make it display.

// console.log('I am "full stack" developer');

try {
  let x = 'a';
  let y = 'b';
  let p = x + y;
  //   let v = b + y;
  console.log('p', p);
  //   console.log('v', v);
} catch {
  console.log('Some error occured');
} finally {
  console.log('Just kidding');
}

// Blur function : Blur function is used to remove the focus from the specified object.

// variable typing
let i;
i = 8; // assigns a number to variable and then assign a string to same variable
i = 'i am variable typing';
console.log(i);


// web garden and a web farm?
//Both web-garden and web-farm are web hosting systems. The only difference is that web-garden is a setup that includes many processors in a single server. At the same time,web-farm is a larger setup that uses more than one server.



//deferred scripts 
//The HTML code’s parsing during page loading is paused by default until the script has not stopped executing. If the server is slow or the script is particularly heavy, then the web page is delayed.

//While using Deferred, scripts delays execution of the script till the time the HTML parser is running. This reduces the loading time of web pages, and they get displayed faster.


//Error
//run time error  -illegal operations - div by zero 
//load time error -during loading of plage - syntatical error  
// logical error - synatatically correct ode which fails to fullfil require task - infinte loop 



//var uri="my test.asp?name=ståle&car=saab";
// document.write(encodeURI(uri)+ "<br>");
// document.write(decodeURI(uri));

//ECMA Script is like rules and guidelines, while Javascript is a scripting language used for web development.

//JavaScript can access all the elements in a web page using the Document Object Model (DOM). The web browser creates a DOM of the webpage when the page is loaded.document.getElementById("one").innerHTML

var set1 = new Set(['js', 'mongo', 'nodejs', 'react', 'reactNative']);
var set2 = new Set(['js', 'mongo', 'nodejs', 'react', 'reactNative']);
var set3 = new Set(['js', 'mongo', 'nodejs', 'react', 'reactNative']);

set1.add('html');
set1.add('css');

console.log(set1);

set2.delete('js', 'mongo');
console.log(set2);

set3.clear();
console.log(set3);


const fruits = new Map([
  ['first', 1],
  ['second', 2],
  ['third', 3],
]);

const a = fruits.get('first');
console.log(fruits.set('fourth', 4));
console.log(a);
console.log(fruits.size, ' size ');
console.log(fruits.delete('third'));
console.log(fruits);
console.log(fruits.has('second'));
*/

// let usefetch = fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/todos/1').then((resp) => {
  console.log(resp.data);
});

fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
  console.log(json)
);
