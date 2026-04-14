// 1. Function declaration
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1, 2, 3)); // 6

// 2. Function expression / Anonymous function
var sum = function (a, b, c) {
    return a + b + c;
}
console.log(sum(2, 3, 4));

// 3. Named function expression
var sum2 = function sum(a, b, c) {
    return a + b + c;
}
console.log(sum2(3, 4, 5));

// 4. Arrow function
var arrowSum = (a, b, c) => a + b + c;
console.log(arrowSum(4, 5, 6));