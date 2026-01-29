var x = 123;
console.log(x);
console.log(typeof x); // number

console.log("--------------------");

x = "Hello World!";
console.log(x);
console.log(typeof x); // string

console.log("--------------------");

x = true;
console.log(x);
console.log(typeof x); // boolean

console.log("--------------------");

x = null;
console.log(x);
console.log(typeof x); // object

console.log("--------------------");

x = undefined;
console.log(x);
console.log(typeof x); // undefined

console.log("--------------------");

x = BigInt('123656725376');
console.log(x);
console.log(typeof x); // bigint

console.log("--------------------");

x = Symbol('123');
console.log(x);
console.log(typeof x); // symbol

// Variable naming convention
// [a-z][A-Z][0-9]$_ = Valid character
// [a-z][A-Z]$_ = Valid starting character