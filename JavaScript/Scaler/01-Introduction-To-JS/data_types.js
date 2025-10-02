var x = 123;
console.log(x);
console.log(typeof x); // number

x = "Hello";
console.log(x);
console.log(typeof x); // string

x = true;
console.log(x);
console.log(typeof x); // boolean

x = null;
console.log(x);
console.log(typeof x); // object

x = undefined;
console.log(x);
console.log(typeof x); // undefined

x = Symbol("id");
console.log(x);
console.log(typeof x); // symbol

x = BigInt(9007199254740991);
console.log(x);
console.log(typeof x); // bigint

x = { name: "Alice", age: 30 };
console.log(x);
console.log(typeof x); // object

x = [1, 2, 3];
console.log(x);
console.log(typeof x); // object

x = function () { return "I am a function"; };
console.log(x);
console.log(typeof x); // function