let radiuses = [1, 2, 3, 4, 5];

const computeArea = (radius) => Math.PI * radius * radius;
const computeCircumference = (radius) => 2 * Math.PI * radius;

const compute = (arr, cb) => arr.map(radius => cb(radius));

let res = compute(radiuses, computeArea);
console.log(res);

res = compute(radiuses, computeCircumference);
console.log(res);