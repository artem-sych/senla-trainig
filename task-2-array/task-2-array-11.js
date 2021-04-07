// 11) Отсортировать массив массив таким образом, чтобы вначале шли массивы с наименьшей длиной. Создать копию произвольного массив"




let array = [
    [1, 2, 3, ],
    [1, 2, 3, 4, ],
    [1, 2, ],
    [1, ],
];

function arrSortShort(arr) {
    arrSort = arr.sort((a, b) => a.length - b.length);
    return arrSort;
}

let arrSort = [...array]



console.log(arrSortShort(arrSort))
