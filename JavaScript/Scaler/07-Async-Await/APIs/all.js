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
        // Gets resolved if all the promises are resolved
        // Rejects if any of the promise is rejected
        // const res = await Promise.all([
        //     createDummyPromise(2000, '2sec'),
        //     createDummyPromise(3000, '3sec'),
        //     createDummyPromise(1000, '1sec'),
        //     createDummyPromise(4000, '4sec')
        // ]);`
        // console.log(res);

        const r1 = createDummyPromise(2000, '2sec');
        const r2 = createDummyPromise(1000, '1sec');

        setTimeout(async () => {
            const res = await Promise.all([
                r1, r2
            ]);
            console.log(res);
        }, 3000);
    } catch (err) {
        console.log(err);
    }
}
callPromisesInParallel();