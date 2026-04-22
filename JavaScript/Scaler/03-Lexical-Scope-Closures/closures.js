function total(x) {
    return function (y) {
        return x + y;
    }
}

const s1 = total(1);
console.log(s1(2)); // 3
console.log(s1(3)); // 4
console.log(s1(4)); // 5
console.log(s1(5)); // 6

console.log('----------------------------');

const s2 = total(2);
console.log(s2(2)); // 4
console.log(s2(3)); // 5
console.log(s2(4)); // 6
console.log(s2(5)); // 7