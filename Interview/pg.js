/** @format */
// for in loop
// event handling in js
// setInterval
// set
// map
// Filter
// FOR - CONTINUE  break
// exception
// debug
// alert
// prompt
// es5 es6
// push , unshift

/*
 JavaScript is a client-side and server-side scripting language inserted into HTML pages and is understood by web browsers.


 Advantage - 
 speed , simple , versatility ,reduces server load 

 disadvantaages 

1. Security: As JavaScript executes on the client side it can be used to exploit the application.
2. UI inconsistency: Sometimes JavaScript is interpreted differently by different browsers resulting in the inconsistent UI.
3.  JavaScript doesn't have any supoort multithreading or multiprocess capabilities.
 * We can not treat JavaScript as a full fledged programming language. It lacks the following important features −
 *
 * Client-side JavaScript does not allow the reading or writing of files. This has been kept for security reason.
 *
 * JavaScript can not be used for Networking applications because there is no such support available.


//return type of null is object 
// The == operator checks equality only whereas === checks equality and data type.

Object Object Object 

let obj = new Object();
let obje = { key: 'value', key1: 'value1', key2: 'value2', key3: 'value3' };

console.log(obje.key1);



// For in is used for object

let obje = { key: 'value', key1: 'value1', key2: 'value2', key3: 'value3' };

for (variable in obje) {
  console.log(variable);
}


// Event - onclick , on submit  , onmouseover and onmouseout -

//cookie - Your server sends some data to the visitor's browser in the form of a cookie. The browser may accept the cookie. If it does, it is stored as a plain text record on the visitor's hard drive. Now, when the visitor arrives at another page on your site, the browser sends the same cookie to the server for retrieval. Once retrieved, your server knows/remembers what was stored earlier.

//Expire , domain , path , Secure , name=value
// storing a cookie - create

document.cookie = { 'name ': cookievalue };
document.cookie = { 'expires ': new Date().toUTCString() };

// to delete
let now = new Date();
now.setMonth(now.getMonth - 1);

document.cookie = { expire: now.toUTCString() };
*/

function redirect(){
    window.location = "https://www.tutorialspoint.com/javascript/javascript_page_redirect.htm"
}
