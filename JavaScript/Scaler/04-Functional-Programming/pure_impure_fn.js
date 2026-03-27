function sum(arr) {
    arr[0] = 0;
    let total = 0;

    for (let i = 0; i < arr.length; i++)
        total += arr[i];

    return total;
}

let arr = [1, 2, 3, 4];
console.log(sum(arr)); // 9
console.log(arr); // [0,2,3,4]

function sum1() {
    let arr = arguments, total = 0;
    arr[0] = 0;

    for (let i = 0; i < arr.length; i++)
        total += arr[0];

    return total;
}

let i = 1, j = 2, k = 3, l = 4;
console.log(sum1(i, j, k, l)); // 9
console.log(i, j, k, l); // 1 2 3 4

var c = 0;

function sum2(a, b) {
    return a + b + c++;
}

console.log(sum2(1, 2)); // 3
console.log(sum2(1, 2)); // 4