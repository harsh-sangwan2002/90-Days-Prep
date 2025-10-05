const calculateArea = (radius) => Math.trunc(Math.PI * Math.pow(radius, 2));
const calculateCircumference = (radius) => Math.trunc(2 * Math.PI * radius);
const calculateDiameter = (radius) => 2 * radius;

let radiuses = [1, 2, 3, 4];
let areas = radiuses.map(calculateArea);
let circumferences = radiuses.map(calculateCircumference);
let diameters = radiuses.map(calculateDiameter);

console.log(areas);
console.log(circumferences);
console.log(diameters);