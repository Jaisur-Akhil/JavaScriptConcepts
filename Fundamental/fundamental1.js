/** @format */

// Type of Cases

// PascalCase
// Kebab-case
// snake_case
// UpperCase
// camelCase

//Variable and Name Conventions

// let rush_akhil = 'project partners';
// let $special = 'valid char';
// let human = 'normal';
// let PI = '3.1415..';
// let favLanguage = 'jsScript';

// console.log(rush_akhil);
// console.log($special);
// console.log(human);
// console.log(PI);
// console.log(favLanguage);

//---------------------------------------------------------------
//Datatypes

//typeof function can be used to know type of any variable

// let willImprove = true;
// console.log(willImprove);
// console.log(typeof willImprove);

// let time;
// console.log(typeof time);
// //As no value is declared to time , the type is recognized as undefined

// console.log(typeof null);
// //null in js - Object

//----------------------------------------------------------------

//Concept of Let , Var , Const

/* VAR 
1. var - variable are processed before execution of the code 
2. var declared outside the function are recognized as global vaiable 
3. value of variable can be changed/overriding an existing value is possible 
4. Redeclaring value is possible

var a = 20;
console.log('global ' + a);

if (true) {
  a = 10;
  console.log('value updated ' + a);
}

console.log('confiming value of variable ' + a);

var a = 40;
console.log('Redeclaring it ' + a);



*/

/*
Let 

Let statement declared a local variable in blockscope 

limited to blockscope 


let a = 20;
console.log('declaring value' + a);
if (true) {
  let a = 10;
  console.log('Changing value' + a);
}

console.log('confirmg value' + a);

//value we changed in if block was blocked scoped

let a = 30;
//gives a syntax error

*/

/*
//Const
//Value can be assigned once and connect be reassigned again

//throws type error

const a = 10;
const a = 30;
*/

/*
var job = 'hu';
let job = 'hell';
const job = 'hev';

console.log(job);
*/

//Math Operations
/*
const val = 2022;
const age_akhil = val - 1998;
const age_kis = val - 1961;
const age_bin = val - 1967;

console.log(age_akhil);
console.log(age_kis);
console.log(age_bin);

const exp = age_akhil + (5 / 5) * 5;
console.log(age_bin + age_kis);
console.log(exp ** 3); //power of
*/

//Assignment Operations
/*
let x = 20;
let y = 5;
y = y + 10;
console.log(y);
x += 10;
y++;
console.log(y);
console.log(x);


let x, y;
x = y = 5 - 90 + 200;
console.log(x, y);
z = 60;
//average
let avg = (x + y + z) / 3;
console.log(avg + 'average of ' + x, y, z);

*/

//Comparision Operator > < >= <=
/*
let a = 20;
let b = 22;
console.log(500 - a > < <= >=  900 + b);
 */

//Exercise
/*
bmi = mass/height **2
bmi2 = mass/height * height

mass in kg 
height in meters

let aMass = 78;
let aHeight = 1.69;

let bMass = 95;
let bHeight = 1.95;

const abmi = 78 / 1.69 ** 2;
const bbmi = 95 / 1.95 ** 2;

console.log(abmi > bbmi);
console.log(abmi);
console.log(bbmi);

*/

//Strings & Literals

/*const job = 'World';
const fn = 'Ambani';
const birth = 1959;
const year = 2022;

let strAm =
  'Im ' +
  fn +
  'I work at ' +
  job +
  'was born in year ' +
  birth +
  'Current age' +
  year -
  birth;

console.log(strAm);

const litAm = `I'm ${fn} i work at ${job} was born in year ${birth} and my current age is ${
  year - birth
}`;

console.log(litAm);
*/

//If Else

/*
const age1 = 19;
const age2 = 15;
if (age2 > 18) {
  console.log('Eligible for License');
} else {
  console.log('Not eligble for Licnese');
}
*/

//Exercise 2
/*
// bmi = mass/height **2
// bmi2 = mass/height * height

// mass in kg
// height in meters

let aMass = 78;
let aHeight = 1.69;

let bMass = 95;
let bHeight = 1.95;

const abmi = 78 / 1.69 ** 2;
const bbmi = 95 / 1.95 ** 2;

let decision = abmi > bbmi;
if ((decision = true)) {
  console.log(`UserA's BMI ${abmi} is Greater then userB's BMI ${bbmi}`);
} else {
  console.log(`UserB's BMI ${bbmi} is Greater then userA's BMI ${abmi}`);
}
*/

//type conversion
/*
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

// when 1 + '1' we get 11 as number
// when '10' - 1 - '1' we get 8 as number
*/

//Falsy Value
//Zero NaN null undefined 'empty Quotes'
/*
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(' ')); //true
console.log(Boolean('Jonas'));
console.log(Boolean({}));
*/

//Equality Operators == & ===
// == equal value
// === equal value and type
/* const age = '18';
if (age === 18) {
  console.log('you became an adult 1 (strict)');
}

if (age === 18) {
  console.log('you became an adult 2  (loose)');
}

if (age == 18) {
  console.log('you became an adult 3  (strict)');
}

if (age == 18) {
  console.log('you became an adult 4 (loose)');
} */

//Logical Operators
/*
const lic = true;
const vision = false;

let a = lic && vision;
let b = lic || vision;
let c = !lic;
let d = !vision;

console.log(`1 a ${a} 
2 b ${b}
3 c ${c}
4 d ${d}  `);


//Exercise 3
// let ds = (96 + 108 + 97) / 3; // wins dolphin
// let ks = (88 + 91 + 110) / 3;

// let ds = (97 + 112 + 101) / 3; //kola wins
// let ks = (109 + 95 + 123) / 3;

let ds = (97 + 112 + 101) / 3;
let ks = (109 + 95 + 106) / 3;

console.log(`Dolphin score ${ds} and Kola score ${ks}`);
if (ds > ks) {
  console.log(`dolphin wins`);
} else if (ks > ds) {
  console.log(`Kola wins`);
} else if (ds === ks) {
  console.log(`draw`);
} else {
  console.log(`Some error `);
}

if (ds >= 100 && ds > ks) {
  console.log(`dolphin wins`);
} else if (ks >= 100 && ks > ds) {
  console.log(`Kola wins`);
} else if (ks > 100 && ds >= 100 && ks === ds) {
  console.log(`Draw `);
} else {
  `no one won`;
}
*/

//Switch Statement
/*
const day = 'Friday';

switch (day) {
  case 'monday':
    console.log('London');
    break;
  case 'tuesday':
    console.log('Nyc');
    break;
  case 'Wedness':
    console.log('Ireland');
    break;
  case 'thrusday':
    console.log('Italy');
    break;
  case 'Friday':
    console.log('US');
    break;
  case 'Sat':
    console.log('Canada');
    break;
  case 'Sunday':
    console.log('Vegas');
    break;
  default:
    console.log('Everyone to Dubaii');
}
*/

//Ternary Operators
/*
const age = 18;
const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

const bill = 275;
const tip = bill <= 50 && bill >= 300 ? 0.15 * bill : 0.2 * bill;
console.log(bill + 'Bill is here');
console.log(tip + 'Tip is here');
//let total_bill = console.log(`hi ${bill + tip}`);
let total_bill1 = bill + tip;
console.log(total_bill1);
*/