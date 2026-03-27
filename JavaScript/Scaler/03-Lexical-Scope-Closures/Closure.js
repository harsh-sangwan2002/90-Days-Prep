/* Closure - A function bundled with it's lexical environment
A closure gives a function access to it's outer scope
*/
function sum(x) {
    let inner = function (y) {
        return x + y;
    }

    return inner;
}

const sum1 = sum(1);

console.log(sum1(5));
console.log(sum1(6));
console.log(sum1(7));

console.log("-------------------------");

const sum2 = sum(2);

console.log(sum2(5));
console.log(sum2(6));
console.log(sum2(7));