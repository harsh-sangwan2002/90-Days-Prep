let radiuses = [1, 2, 3, 4, 5];

function calculateArea() {
    const areaArr = [];

    for (let i = 0; i < radiuses.length; i++)
        areaArr.push(Math.PI * radiuses[i] * radiuses[i]);

    return areaArr;
}

function calculateCircumference() {
    const cirArr = [];

    for (let i = 0; i < radiuses.length; i++)
        cirArr.push(2 * Math.PI * radiuses[i]);

    return cirArr;
}

let res = calculateArea();
console.log(res);

res = calculateCircumference();
console.log(res);