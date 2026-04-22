function total(a, b) {
    var fn = function () {
        return a + b;
    }
    return fn;
}

const res = total(1, 2);
console.log(res());

function compute(fn, x, y) {
    return fn(x, y);
}

function sum(a, b) {
    return a + b;
}
console.log(compute(sum, 1, 2)); // 3