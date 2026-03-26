console.log([] == []); // false
console.log([] == {}); // false
console.log({} == {}); // false
console.log([] == ![]); // true

console.log([] + []); // empty string
console.log([] + {}); // [object Object]
console.log({} + {}); // [object Object] [object Object]
