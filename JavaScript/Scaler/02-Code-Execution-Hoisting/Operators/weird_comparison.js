console.log(Number([])); // 0
console.log(Number({})); // NaN

// Boolean checks for truthy and falsy values
console.log(Boolean([])); // true
console.log(Boolean({})); // true

console.log(String([])); // ''
console.log(String({})); // [object Object]

console.log([] == {}); // false
console.log({} == []); // false
console.log([] == []); // false
console.log({} == {}); // false
console.log([] == ![]); // true

console.log([] + {}); // [object Object]
console.log({} + []); // [object Object]
console.log({} + {}); // [object Object] [object Object]