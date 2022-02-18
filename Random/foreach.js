/** @format */

let sum = 0;
let num = [12, 26, 6, 45, 78, 32, 65, 100];

let k = [];
let nume = [12, 26, 6, 45, 78, 32, 65, 100];

function myfunc(num) {
  sum = sum + num;
}

function multi(nume) {
  k = k + ',' + nume * 10;
}

num.forEach(myfunc);
nume.forEach(multi);
console.log(sum);
console.log(k);
console.log(num);

