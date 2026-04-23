console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean([] + [])); // false
console.log(Boolean({})); // true

console.log('----------------------------');

console.log([] + []); // empty string
console.log([] + {}); // [object Object]
console.log({} + []); // [object Object]
console.log({} + {}); // [object Object] [object Object]