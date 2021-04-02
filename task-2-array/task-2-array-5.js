// 5) Создать функцию, которая упорядочит буквы в строке "екважбигёзд" 
// в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").

let str = "екважбигёзд";

function gerReverse(arr) {
    let collator = new Intl.Collator(); 
    arr = arr.split('').sort(function (a, b) {
        return collator.compare(a, b);
    }).reverse();
    return arr;
}
gerReverse(str);
console.log(str);