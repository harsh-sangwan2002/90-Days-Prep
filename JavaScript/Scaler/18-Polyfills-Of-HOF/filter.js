Array.prototype.map = function (cb, thisArg) {

    let res = [];
    let arr = thisArg || this;

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }

    return res;
}

var cb = function (ele, idx, arr) {
    return ele % 2 === 0;
}

let arr = [1, 2, 3, 4, 5], res = arr.filter(cb);
console.log(res);