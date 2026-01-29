// Impure function: modifies the input array
function sum(arr) {
    arr[0] = 20;
    let total = 0;

    for (let i = 0; i < arr.length; i++)
        total += arr[i];

    return total;
}

console.log(sum([1, 2, 3, 4])); // 29

let c = 0;

function sum2(a, b) {
    return a + b + c++;
}

console.log(sum2(1, 2)); // 3
console.log(sum2(1, 2)); // 4