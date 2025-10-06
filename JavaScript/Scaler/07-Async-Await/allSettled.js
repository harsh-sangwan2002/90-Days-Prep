function createDummyPromise(delay, message) {

    return new Promise((resolve, reject) => {

        const TIMEOUT = 5000;

        if (delay > TIMEOUT) {
            reject("Delay is too long");
            return;
        }

        else {
            setTimeout(() => {
                resolve(message);
            }, delay);
        }
    })
}

// Gives results of all promises, whether resolved or rejected
try {
    const res = await Promise.allSettled([
        createDummyPromise(1000, "First Promise"),
        createDummyPromise(2000, "Second Promise"),
        createDummyPromise(6000, "Third Promise")
    ]);
    console.log(res);

} catch (err) {
    console.log(err);
}