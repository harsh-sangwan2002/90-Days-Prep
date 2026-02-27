var a = { x: 1, y: 2, z: { m: 3, n: 4 } };

// 1. Spread Operator
var b = { ...a };
b['x'] = 10;
b['z']['m'] = 30;
console.log(a);

// 2. assign Method
var c = Object.assign({}, a);
b['x'] = 100;
b['z']['m'] = 300;
console.log(c);