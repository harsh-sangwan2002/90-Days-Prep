function sum(arr) {
    let total = 0;
    arr[0] = 0;

    for (let i = 0; i < arr.length; i++)
        total += arr[i];

    return total;
}

let arr = [1, 2, 3, 4];
console.log(sum(arr));

/* Impure functions have side-effects, they may not give the same output for the same set of input parameters 
Impure functions mutates the state of the passed arguments or some other objects
*/
function sum2(a, b, c, d) {
    let arr = arguments;
    console.log(arr);
    console.log(typeof arr);

    arr[0] = 0;
    let total = 0;

    for (let i = 0; i < arr.length; i++)
        total += arr[i];

    return total;
}

console.log(sum2(1, 2, 3, 4, 5));

function sum3(a, b, c) {
    return a + b + c++;
}

console.log(sum3(1, 2, 3));
console.log(sum3(1, 2, 3));