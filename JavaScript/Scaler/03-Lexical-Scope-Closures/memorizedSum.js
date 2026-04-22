function memorizedSum(arr) {

    let obj = {};

    return function () {

        if (obj[arr]) {
            console.log("Memorized");
            return obj[arr];
        }

        else {
            console.log("Computing");
            return obj[arr] = arr[0] + arr[1];
        }
    }
}

const sum1 = memorizedSum([1, 2]);
console.log(sum1()); // 3
console.log(sum1()); // 3
console.log(sum1()); // 3

console.log("--------------------------------");

const sum2 = memorizedSum([2, 3]);
console.log(sum2()); // 5
console.log(sum2()); // 5
console.log(sum2()); // 5