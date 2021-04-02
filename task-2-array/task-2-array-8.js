// 8) Удвоить элементы массива, не используя циклы.


function doublItem(arr) {


let result = arr.map(function (item, ) {
    return item*2;
});
return result;
}

console.log(doublItem([ 2, 4, 6, 8, 4 ]));