function calculateArea(radiuses) {
    let areas = [];
    for (let i = 0; i < radiuses.length; i++) {
        let area = Math.trunc(Math.PI * Math.pow(radiuses[i], 2));
        areas.push(area);
    }
    return areas;
}

function calculateCircumference(radiuses) {
    let circumferences = [];
    for (let i = 0; i < radiuses.length; i++) {
        let circumference = Math.trunc(2 * Math.PI * radiuses[i]);
        circumferences.push(circumference);
    }
    return circumferences;
}

function calculateDiameter(radiuses) {
    let diameters = [];
    for (let i = 0; i < radiuses.length; i++) {
        let diameter = 2 * radiuses[i];
        diameters.push(diameter);
    }
    return diameters;
}

let radiuses = [1, 2, 3, 4];
console.log(calculateArea(radiuses));
console.log(calculateCircumference(radiuses));
console.log(calculateDiameter(radiuses));
