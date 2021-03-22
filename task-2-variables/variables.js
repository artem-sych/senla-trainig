//Придумать название для переменных, которые описывают (let, const)

const userNameFirst;
const userNameSecond;
let userAge;
let userInfo;


//Что будет в консоле и почему:

// 1
console.log(test);
var test = 'string'; // undefined, но почему, непонятно (связано с var)

// 2
var x = 'string';
var x = 'string 2';
console.log(x); // string 2, но почему, непонятно (связано с var)

// 3
console.log(test);
let test = 'string'; // ошибка, переменная не определена

// 4
const x = 'string';
const x = 'string 2';
console.log(x); // ошибка, нельзя объявлять 2 раза константу с одинаковым названием

// 5
let num = 12;
let num = 1;
console.log(num); // ошибка, нельзя объявлять 2 раза переменную с одинаковым названием


