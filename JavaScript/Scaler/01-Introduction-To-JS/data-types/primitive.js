var x = 123;
console.log(x);
console.log(typeof x); // number

console.log('--------------------------');

var x = "123";
console.log(x);
console.log(typeof x); // string

console.log('--------------------------');

var x = true;
console.log(x);
console.log(typeof x); // boolean

console.log('--------------------------');

var x = undefined;
console.log(x);
console.log(typeof x); // undefined

console.log('--------------------------');

var x = null;
console.log(x);
console.log(typeof x); // object

console.log('--------------------------');

var x = 127635761253675127635676758123n;
console.log(x);
console.log(typeof x); // bigint

console.log('--------------------------');

// Symbol is a built-in object whose constructor returns a symbol 
// primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.
var x = Symbol('123');
console.log(x);
console.log(typeof x); // symbol