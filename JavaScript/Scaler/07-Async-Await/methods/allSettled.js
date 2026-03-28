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

// Gives value for every resolved and rejected promise
try {
    const res = await Promise.allSettled([
        createDummyPromise(2000, '2sec'),
        createDummyPromise(1000, '1sec'),
        createDummyPromise(20000, '20sec')
    ])
    console.log(res);
} catch (err) {
    console.log(err);
}