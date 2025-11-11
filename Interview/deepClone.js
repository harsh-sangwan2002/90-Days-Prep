function deepClone(obj) {

    if (obj === null || typeof obj !== 'object')
        return obj;

    let res = Array.isArray(obj) ? [] : {};

    for (let key in obj)
        res[key] = deepClone(obj[key]);

    return res;
}

const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    }
}

const obj2 = deepClone(obj1);
obj2.b.c = 20;
obj2.b.d[0] = 30;

console.log(obj1); // { a: 1, b: { c: 2, d: [ 3, 4 ] } }
console.log(obj2); // { a: 1, b: { c: 20, d: [ 30, 4 ] } }