const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, ele) => acc + ele, 0);
console.log(sum);

const max = arr.reduce((acc, ele) => Math.max(acc, ele), Number.MIN_SAFE_INTEGER);
console.log(max);