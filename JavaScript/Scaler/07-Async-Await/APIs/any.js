function createDummyPromise(delay, message) {

    return new Promise((resolve, reject) => {

        const TIMEOUT = 5000;

        if (delay > TIMEOUT)
            reject("Rejected");

        else
            setTimeout(() => {
                resolve(message);
            }, delay);
    })
}

async function callPromisesInParallel() {
    try {
        // Resolves the first settled promise
        // AggregateError if all promises are rejected
        const res = await Promise.any([
            createDummyPromise(20000, '2sec'),
            createDummyPromise(3000, '3sec'),
            createDummyPromise(1000, '1sec'),
            createDummyPromise(4000, '4sec')
        ]);
        console.log(res);

    } catch (err) {
        console.log(err);
    }
}
callPromisesInParallel();