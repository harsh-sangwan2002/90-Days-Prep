function sum(x) {
    let inner = function (y) {
        return x + y;
    }

    return inner;
}

const sum1 = sum(1);

console.log(sum1(2)); // 3
console.log(sum1(3)); // 4
console.log(sum1(4)); // 5

const sum2 = sum(2);

console.log(sum2(2)); // 4
console.log(sum2(3)); // 5
console.log(sum2(4)); // 6