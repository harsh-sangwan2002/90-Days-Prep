function flattenObj(obj, parentKey = '', res = {}) {

    for (let key in obj) {

        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if (typeof obj[key] === 'object')
            flattenObj(obj[key], newKey, res);
        else
            res[newKey] = obj[key];
    }

    return res;
}

const exampleObj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    },
    f: 4
};

console.log(flattenObj(exampleObj));
// Output: { 'a': 1, 'b.c': 2, 'b.d.e': 3, 'f': 4 }