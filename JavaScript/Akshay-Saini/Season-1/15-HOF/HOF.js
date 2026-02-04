let radius = [1, 2, 3, 4, 5];

const area = (radius) => Math.round(Math.PI * radius * radius);
const circumference = (radius) => Math.round(2 * Math.PI * radius);
const diameter = (radius) => Math.round(2 * radius);

function calculate(arr, cb) {

    let res = [];

    for (let i = 0; i < arr.length; i++)
        res.push(cb(arr[i]));

    return res;
}

let res = calculate(radius, area);
console.log(res);

res = calculate(radius, circumference);
console.log(res);

res = calculate(radius, diameter);
console.log(res);