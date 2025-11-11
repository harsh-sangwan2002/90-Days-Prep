const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p1 resolved');
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 resolved');
    }, 2000);
})

Promise.myAllSettled = function (promises) {
    return new Promise((resolve, reject) => {
        let res = [], count = 0;

        promises.forEach((promise, idx) => {
            promise.then((data) => {
                res[idx] = { "status": "fulfilled", "value": data };
                count++;
                if (count === promises.length) {
                    resolve(res);
                }
            }).catch((err) => {
                res[idx] = { "status": "rejected", "reason": err };
                count++;
                if (count === promises.length) {
                    resolve(res);
                }
            })
        })
    });
}

// Our Method
Promise.myAllSettled([p1, p2])
    .then((data) => {
        console.log("My Promise.allSettled: ", data);
    })
    .catch((err) => {
        console.log("Promise got rejected with error: " + err);
    });

// Real
Promise.allSettled([p1, p2])
    .then((data) => {
        console.log("Real One: ", data);
    })
    .catch((err) => {
        console.log("Promise got rejected with error: " + err);
    });