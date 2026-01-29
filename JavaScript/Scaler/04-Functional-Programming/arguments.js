function fn() {

    let arr = arguments;
    console.log(arr);
    console.log(typeof arr);
    console.log(arr instanceof Array);

    let total = 0;

    for (let i = 0; i < arr.length; i++)
        total += arr[i];

    return total;
}

let i = 1, j = 2, k = 3, l = 4;
let res = fn(i, j, k, l);
console.log(res);