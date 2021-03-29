//В строке "теперь я мастер циклов javascript"

let str = "теперь  я мастер циклов javascript";
let x;
for (let i = 0; i < str.length; i++) {
    if (i === 0 && i !== ' ') {
        x = str[0].toUpperCase();
    } else if (str[i] !== ' ') {
        x = x + str[i];
    } else {
        x = x + str[i + 1].toUpperCase();
        i++;
    }
}


console.log(x);