function sum() {
    let obj = {};

    return function (arr) {

        console.log(obj);

        if (obj[arr]) {
            console.log("Memory");
            return obj[arr];
        }

        else {
            console.log("Compute");
            return obj[arr] = arr[0] + arr[1];
        }
    }
}

const memorizedSum = sum();

console.log(memorizedSum([1, 2])) // compute
console.log(memorizedSum([1, 2])) // memory

console.log(memorizedSum([2, 2])) // compute
console.log(memorizedSum([2, 2])) // memory