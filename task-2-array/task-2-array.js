// 1) Используя функцию, найти последний элемент массива, не изменяя его.

let arr = ["Яблоко", "Апельсин", "Слива", "Банан"];
console.log(arr[arr.length - 1]);

let getLastItem = arr.find(function (item, index, array) {
    return index === arr.length - 1;
});
console.log(getLastItem);