function flattenObject(obj, parentKey = '', res = {}) {

    for (let key in obj) {

        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if (typeof obj[key] !== 'object')
            res[newKey] = obj[key];
        else
            flattenObject(obj[key], newKey, res);
    }

    return res;
}

const obj = {
    a: 1,
    b: {
        c: 2,
        d: 3
    },
    e: [4, 5, 6]
}
console.log(flattenObject(obj)); // { a: 1, 'b.c': 2, 'b.d': 3, 'e.0': 4, 'e.1': 5, 'e.2': 6 }