var a = { x: 1, y: 2, z: { m: 3, n: 4 } };

function deepClone(obj) {

    if (obj == null || typeof obj !== 'object')
        return obj;

    const res = Array.isArray(obj) ? [] : {};

    for (let key in obj)
        res[key] = deepClone(obj[key]);

    return res;
}

var b = deepClone(a);
b['x'] = 10;
b['z']['m'] = 30;
console.log(a);