Array.prototype.map = function (cb, thisArg) {

    let res = [];
    let arr = thisArg || this;

    for (let i = 0; i < arr.length; i++) {
        res.push(cb(arr[i], i, arr));
    }

    return res;
}

var cb = function (ele, idx, arr) {
    return 2 * ele;
}

let arr = [1, 2, 3, 4, 5], res = arr.map(cb);
console.log(res);