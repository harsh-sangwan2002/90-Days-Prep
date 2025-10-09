var a = { x: 1, y: 2, z: { m: 3, n: 4 } };

// 1. JSON.parse
var b = JSON.parse(JSON.stringify(a));
b['x'] = 10;
b['z']['m'] = 30;
console.log(a);