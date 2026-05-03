/* Impure functions modifies the state of the outer variables/objects which makes them to return difference output even when the same input parameters are passed */
function sum(arr) {
    let total = 0;
    arr[0] = 0;

    for (let i = 0; i < arr.length; i++)
        total += arr[i];

    return total;
}

let arr = [1, 2, 3, 4];
// console.log(sum(arr));

function sum1() {
    let arr = arguments, total = 0;
    arr[0] = 0;

    console.log(arr, typeof arr);
    for (let i = 0; i < arr.length; i++)
        total += arr[i];

    return total;
}
let i = 1, j = 2, k = 3, l = 4;
console.log(sum1(i, j, k, l));

var c = 0;
function sum2(a, b) {
    return a + b + c++;
}

// console.log(sum2(1, 2));
// console.log(sum2(1, 2));