const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 resolved');
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p2 rejected');
    }, 2000);
})

Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
        let count = 0;

        promises.forEach((promise, idx) => {
            promise.then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            })
        })
    });
}

// Our Method
Promise.myRace([p1, p2])
    .then((data) => {
        console.log("My Promise.any: ", data);
    })
    .catch((err) => {
        console.log("Promise got rejected with error: " + err);
    });

// Real
Promise.race([p1, p2])
    .then((data) => {
        console.log("Real One: ", data);
    })
    .catch((err) => {
        console.log("Promise got rejected with error: " + err);
    });