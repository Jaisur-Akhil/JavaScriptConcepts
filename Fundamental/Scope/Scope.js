/** @format */

'use strict';

//Function Block
function calcAge(birth) {
  const age = 2050 - birth;
  console.log(firstName);
  //   console.log(lastName);

  //Nested function to show that the inner functionn can access the variable of parent scope
  function printAge() {
    const output = `you are the ${age} , born in ${birth}`;
    console.log(output);

    if (age >= 50 && age <= 75) {
      var alive = true;
      const str = `Oh , its a golden jublee at ${age} of ${firstName}`;
      console.log(str);
    }
    console.log(alive);
    console.log(str);
  }

  printAge();
  return age;
}

const firstName = 'Akhil';
calcAge(1998);
