Array.prototype.map = function (cb, thisArg) {

    let res = 0;

    for (let i = 0; i < this.length; i++) {
        res = cb(res, this[i], i, this);
    }

    return res;
}

var cb = function (acc, ele, idx, arr) {
    return acc + ele;
}

let arr = [1, 2, 3, 4, 5], res = arr.reduce(cb, 0);
console.log(res);