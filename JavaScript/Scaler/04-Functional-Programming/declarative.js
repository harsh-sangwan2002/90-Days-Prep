const findCircumference = (radius) => Math.round(2 * Math.PI * radius);
const findArea = (radius) => Math.round(Math.PI * radius * radius);

const compute = (fn, arr) => arr.map(radius => fn(radius));

let arr = [1, 2, 3, 4];
console.log(compute(findCircumference, arr));
console.log(compute(findArea, arr));