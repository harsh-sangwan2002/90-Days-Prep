// == does type coercion first then comapres the values
console.log("Ram" == "Shyam"); // false
console.log("Ram" == "Ram"); // true
console.log("Ram" == "ram"); // false
console.log(1 == "ram"); // false
console.log(0 == 0); // true
console.log(0 == null); // false
console.log(0 == ""); // true
console.log(null == ""); // false
console.log(null == undefined); // true

console.log("------------------------");

// === checks the types if they are equal then it checks the values
console.log(null === undefined);
console.log(1 === "1");