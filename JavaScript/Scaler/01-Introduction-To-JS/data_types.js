var x = 12;
console.log(x);
console.log(typeof x); // number

console.log("-------------------------");

x = "Hello";
console.log(x);
console.log(typeof x); // string

console.log("-------------------------");

x = true;
console.log(x);
console.log(typeof x); // boolean

console.log("-------------------------");

x = undefined;
console.log(x);
console.log(typeof x); // undefined

console.log("-------------------------");

x = null;
console.log(x);
console.log(typeof x); // object

console.log("-------------------------");

x = 1267357658234876234n;
console.log(x);
console.log(typeof x); // bigint

console.log("-------------------------");

x = Symbol("123");
console.log(x);
console.log(typeof x); // symbol
console.log(Symbol('123') == Symbol('123')); // false