//В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"

let str = "теперь я мастер циклов javascript";
let x = str[1];
for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
        x = x + str[i];
    } else {
        x = x + str[i + 1].toUpperCase();
        i++;
    }
}

console.log(x);