const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P1 resolved");
    }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("P2 resolved");
    // }, 1000);
    setTimeout(() => {
        reject("P2 rejected");
    }, 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P3 resolved");
    }, 2000);
})

// Resolves any promise which resolves first
// AggregateError if all promises are rejected
Promise.any([p1, p2, p3]).then(val => {
    console.log(val);
}).catch(err => {
    console.log(err);
})