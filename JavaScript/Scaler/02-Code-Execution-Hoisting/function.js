console.log(sum(1, 2, 3)); // 6

// Named function declaration
function sum(a, b, c) {
    let total = a + b + c;
    return total;
}
console.log(sum(1, 2, 3)); // 6

// console.log(sum1(1, 2, 3)); // TypeError: sum1 is not a function
// Anonymous function expression
const sum1 = function (a, b, c) {
    let total = a + b + c;
    return total;
}
console.log(sum1(1, 2, 3)); // 6

const total = (arr) => {

    let sum = 0;

    for (let i = 0; i < arr.length; i++)
        sum += arr[i];

    return sum;
}
console.log(total([1, 2, 3, 4, 5])); // 15

function sum(a, b) {
    var fn = function () {
        return a + b;
    }
    return fn;
}

console.log(typeof sum(1, 2));
console.log(sum(1, 2)());