/*
1) Получить первую и последнюю букву строки+
2) Сделать первую и последнюю буквы в верхнем регистре+
3) Найти положение слова string в строке
4) Найти положение второго пробела
5) Получить строку со 2-ого символа длинной 6 букв
6) Получить строку с 1 по 7 символ
7) Получить из ух переменных типа number x = 20, y = 21 получить строку '2021*/

let string = 'string test example'
console.log(string[0], string[string.length-1]); //1
console.log(string[0].toUpperCase() + 'tring test exampl' + string[string.length-1].toUpperCase());  //2
console.log(string.indexOf('string')); //3
console.log(string.indexOf(' ', string.indexOf(' ') + 1)); //4
console.log(string.substr(2, 6)); //5
console.log(string.slice(1, 8)); //6

let x = 20; //7
let y = 21;
let str = String(x) + String(y);
console.log(typeof str, str);
