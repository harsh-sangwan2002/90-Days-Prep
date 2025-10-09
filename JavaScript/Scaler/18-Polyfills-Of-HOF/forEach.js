Array.prototype.forEach = function (cb, thisArg) {

    let arr = thisArg || this;

    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

var cb = function (ele, idx, arr) {
    console.log(idx, ele, arr);
}

let arr = [1, 2, 3, 4, 5];
arr.forEach(cb);