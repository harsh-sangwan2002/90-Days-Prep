// Question - 1
function counter(arg) {

    let count = 1;

    if (arg === 0)
        return count;

    return function inner(arg2) {
        count++;

        if (arg2 === 0)
            return count;

        return inner;
    }
}

console.log(counter(0)); // 1
console.log(counter()(0)); // 2
console.log(counter()()(0)); // 3

// Question - 2
function add(a) {

    if (!a)
        return 0;

    return function inner(b) {

        if (!b)
            return a;

        return add(a + b);
    }
}

console.log(add(1)()); // 1
console.log(add(1)(2)()); // 3
console.log(add(1)(2)(3)()); // 6
console.log(add(1)(2)(3)(4)()); // 10