function calculateCircuference(arr) {

    let res = [];

    for (let i = 0; i < arr.length; i++)
        res.push(Math.round(2 * Math.PI * arr[i]));

    return res;
}

function calculateArea(arr) {

    let res = [];

    for (let i = 0; i < arr.length; i++)
        res.push(Math.round(Math.PI * arr[i] * arr[i]));

    return res;
}

let radiuses = [1, 2, 3, 4];
console.log(calculateCircuference(radiuses));
console.log(calculateArea(radiuses));