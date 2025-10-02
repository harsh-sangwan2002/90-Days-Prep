console.log(typeof 42);          // "number"
console.log(typeof 3.14);        // "number"
console.log(typeof NaN);         // "number"
console.log(typeof 'Hello');     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof false);       // "boolean"
console.log(typeof null);        // "object" (this is a known quirk in JavaScript)
console.log(typeof undefined);   // "undefined"
console.log(typeof Symbol());    // "symbol"
console.log(typeof BigInt(123)); // "bigint"   

console.log(typeof {});          // "object"
console.log(typeof []);          // "object" (arrays are objects in JavaScript)
console.log(typeof function () { }); // "function"