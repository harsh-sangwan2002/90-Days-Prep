function sum(a, b) {
    var total = function () {
        return a + b;
    }
    return total;
}
console.log(sum(1, 2));
console.log(typeof sum(1, 2)); // function
console.log(sum(1, 2)());