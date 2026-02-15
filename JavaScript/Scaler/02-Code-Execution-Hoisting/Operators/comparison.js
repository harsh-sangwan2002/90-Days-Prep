console.log("Ram" == "Shyam"); // false
console.log("Ram" == "Ram"); // true
console.log("Ram" == "ram"); // false
console.log(1 == "Ram"); // false
console.log(0 == 0); // true
console.log(0 == null); // false
console.log(0 == ''); // true
console.log(0 == undefined); // false
console.log(null == undefined); // true
console.log(NaN == NaN); // false

console.log([]==[]); // false as both sides are objects
console.log([]==![]); // ![] -> false and [] -> ''
console.log([] == false); // true
console.log({} == '[object Object]'); // true

console.log([] + {}); // object Object
console.log({} + []); // object Object
console.log([] + []); // ""