var x = Symbol.for('123');
var y = Symbol.for('123');

console.log(x === y); // true

/*
👉 Symbol.for():
Reuses the same symbol from a global registry
*/