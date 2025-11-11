const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 resolved');
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 resolved');
    }, 2000);
})

Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        let res = [], count = 0;

        promises.forEach((promise, idx) => {
            promise.then((data) => {
                res[idx] = data;
                count++;
                if (count === promises.length) {
                    resolve(res);
                }
            }).catch((err) => {
                reject(err);
            })
        })
    });
}

// Our Method
Promise.myAll([p1, p2])
    .then((data) => {
        console.log("My Promise.all: ", data);
    })
    .catch((err) => {
        console.log("Promise got rejected with error: " + err);
    });

// Real
Promise.all([p1, p2])
    .then((data) => {
        console.log("Real One: ", data);
    })
    .catch((err) => {
        console.log("Promise got rejected with error: " + err);
    });