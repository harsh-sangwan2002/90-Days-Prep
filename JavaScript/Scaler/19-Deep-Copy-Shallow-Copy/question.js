function fn() {
    return fn;
}

console.log(fn());
console.log(new fn());
console.log(fn() === new fn());