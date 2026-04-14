const sum = function () {
    let obj = {};

    return function (arr) {

        console.log(obj);

        if (obj[arr]) {
            console.log("Memory")
            return obj[arr];
        }

        else {
            console.log("Computing");
            return obj[arr] = arr[0] + arr[1];
        }
    }
}

const memorizedSum = sum();

console.log(memorizedSum([1, 2]));
console.log(memorizedSum([1, 2]));
console.log(memorizedSum([2, 3]));
console.log(memorizedSum([2, 3]));