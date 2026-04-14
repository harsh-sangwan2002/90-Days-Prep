function sum(a, b) {
    return function () {
        return a + b;
    }
}

console.log(typeof sum(1, 2));

var total = sum(1, 2);
console.log(total());

function compute(fn, a, b) {
    return fn(a, b);
}

var agg = function (a, b) {
    return a + b;
}
console.log(compute(agg, 1, 2));