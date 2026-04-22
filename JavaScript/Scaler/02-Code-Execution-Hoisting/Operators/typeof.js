console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof NaN); // number
console.log(typeof Array); // function
console.log(typeof Function); // function
console.log(typeof Object); // function
console.log(typeof ""); // string
console.log(typeof 0); // number

console.log(null + undefined); // NaN
console.log(undefined + 0); // NaN
console.log(null + 1); // 1
console.log(0 + []); // 0
console.log(0 + {}); // 0 [object Object]
console.log({} + 0); // [object Object] 0
console.log([] + 0); // 0

console.log(Number([])); // 0
console.log(Number({})); // NaN
console.log(String({})); // [object Object]
console.log(String({})); // [object Object]