// 4) Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, 
//  а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"

let arr1 = [1, 2, 3];
let arr2 = ["x", "y", "z"];
let arr = [arr1, arr2];

function delFirstItem(...arr) {
    arr.forEach(function (item) {
        item.splice(0, 1);
      })
    return arr;
}

delFirstItem(...arr);
console.log(arr);