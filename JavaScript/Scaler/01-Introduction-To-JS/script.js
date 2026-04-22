console.log(window.a); // undefined
console.log(window.b); // undefined
console.log(b); // ReferenceError: b is not defined

var a = 10;

// variable b is not hoisted at all
b = 20;

console.log(window.a);
console.log(window.b);