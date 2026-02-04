let radius = [1, 2, 3, 4, 5];

function calculateArea(arr) {

    let res = [];

    for (let i = 0; i < arr.length; i++)
        res.push(Math.PI * arr[i] * arr[i]);

    return res;
}
let res = calculateArea(radius);
console.log(res);

function calculateCircumference(arr) {

    let res = [];

    for (let i = 0; i < arr.length; i++)
        res.push(2 * Math.PI * arr[i]);

    return res;
}
res = calculateCircumference(radius);
console.log(res);

function calculateDiameter(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++)
        res.push(2 * arr[i]);

    return res;
}
res = calculateDiameter(radius);
console.log(res);