// 1. Function Declaration
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1, 2, 3)); // 6

// 2. Anonymous Function / Function Expression
var sum = function (a, b, c) {
    return a + b + c;
}
console.log(sum(2, 3, 4)); // 9

// 3. Named Function Expression
var sum = function sum2(a, b, c) {
    return a + b + c;
}
console.log(sum(3, 4, 5)); // 12

// 4. Arrow Function
var sum = (a, b, c) => a + b + c;
console.log(sum(4, 5, 6)); // 15