// Function declaration
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1, 2, 3));

console.log("------------------------");

// Anonymous function / Function expression
var sum = function (a, b, c) {
    return a + b + c;
}
console.log(sum(1, 2, 3));

console.log("------------------------");

// Named function expression
var sum = function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1, 2, 3));

console.log("------------------------");

// Arrow function
var sum = (a, b, c) => a + b + c;
console.log(sum(1, 2, 3));

console.log("------------------------");

// Callback function
function compute(fn, a, b) {
    return fn(a, b);
}

var sum = (a, b) => a + b;
var sub = (a, b) => a - b;
console.log(compute(sum, 1, 2));
console.log(compute(sub, 1, 2));