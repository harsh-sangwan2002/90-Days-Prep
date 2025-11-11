function count(a) {

    let counter = 1;

    if (a == 0)
        return counter;

    return function inner(b) {

        counter++;

        if (b == 0)
            return counter;

        return inner;
    }
}

console.log(count(0)); // 1
console.log(count()(0)); // 2
console.log(count()()(0)); // 3