function sum(x) {
    return function (y) {
        return x + y;
    }
}

const sum1 = sum(5);
console.log(sum1(3));
console.log(sum1(4));
console.log(sum1(5));
console.log(sum1(6));

const sum2 = sum(10);
console.log(sum2(3));
console.log(sum2(4));
console.log(sum2(5));
console.log(sum2(6));