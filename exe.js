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
/* */
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
