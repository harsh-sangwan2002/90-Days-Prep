const createDummyPromise = (delay, message) => {
    return new Promise((resolve, reject) => {

        if (delay > 5000)
            reject("Promise rejected");

        else
            setTimeout(() => {
                resolve(message);
            }, delay);
    })
}

// Any promise which resolves first
// AggregateError if all the promises are rejected
try {

    const res = await Promise.any([
        createDummyPromise(2000, '2sec'),
        createDummyPromise(1000, '1sec'),
        createDummyPromise(20000, '20sec')
    ])
    console.log(res);
} catch (err) {
    console.log(err);
}