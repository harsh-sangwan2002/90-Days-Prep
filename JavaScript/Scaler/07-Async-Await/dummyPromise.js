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
const p = createDummyPromise(3000, "Hello after 3 seconds");

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
        const r1 = await p;
        console.log(r1);

        const r2 = await p;
        console.log(r2);
    } catch (err) {
        console.log(err);
    }
}
// callDummyPromise();

async function callDummyPromise() {
    try {
        const r1 = await createDummyPromise(5000, "Promise resolved after 5s");
        console.log(r1);

        const r2 = await createDummyPromise(3000, "Promise resolved after 3s");
        console.log(r2);
    } catch (err) {
        console.log(err);
    }
}
callDummyPromise();