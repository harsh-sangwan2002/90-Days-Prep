const calculateArea = (radius) => Math.round(Math.PI * radius * radius);
const calculateCircumference = (radius) => Math.round(2 * Math.PI * radius);

const logic = (fn, arr) => arr.map(radius => fn(radius));

let arr = [1, 2, 3, 4];
console.log(logic(calculateCircumference, arr));
console.log(logic(calculateArea, arr));