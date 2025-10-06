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

// Resolves/Rejects promise which is settled first
try {
    const res = await Promise.race([
        createDummyPromise(1000, "First Promise"),
        createDummyPromise(2000, "Second Promise"),
        createDummyPromise(6000, "Third Promise")
    ]);
    console.log(res);

} catch (err) {
    console.log(err);
}