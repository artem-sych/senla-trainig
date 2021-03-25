//В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"

let str = "Я стану крутым программистом";
let x = str[1].toLowerCase;
for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
        x += str[i];
    } else {
        x += ' ' + str[i + 1].toUpperCase();
        i++;
    }
}

console.log(x);