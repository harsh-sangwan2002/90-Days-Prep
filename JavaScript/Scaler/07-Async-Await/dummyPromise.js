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

//ES5
// createDummyPromise(2000, "Hello after 2 seconds")
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

// createDummyPromise(6000, "Hello after 6 seconds")
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

//ES6 Async/Await
async function callDummyPromise() {
    try {
        const r1 = await createDummyPromise(3000, "Hello after 3 seconds");
        console.log(r1);

        const r2 = await createDummyPromise(4000, "Hello after 7 seconds");
        console.log(r2);
    } catch (err) {
        console.log(err);
    }
}
callDummyPromise();