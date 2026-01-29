function compute(fn, a, b) {

    return fn(a, b);
}

const agg = (a, b) => a + b;
const sub = (a, b) => a - b;

console.log(compute(agg, 1, 2));
console.log(compute(sub, 3, 2));