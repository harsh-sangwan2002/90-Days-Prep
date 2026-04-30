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
        // Gives result for all the promises
        const res = await Promise.allSettled([
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