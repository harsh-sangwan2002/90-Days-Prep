var x = 2;
console.log(x);
console.log(typeof x); // number

x = "Hello"
console.log(x);
console.log(typeof x); // string

x = true;
console.log(x);
console.log(typeof x); // boolean

x = undefined;
console.log(x);
console.log(typeof x); // undefined

x = null;
console.log(x);
console.log(typeof x); // object

x = 123765761523765n;
console.log(x);
console.log(typeof x); // bigint

x = Symbol("123");
console.log(x);
console.log(typeof x); // symbol

console.log(Symbol("123") == Symbol("123"));