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

// ES5
// createDummyPromise(20000, '20sec').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// createDummyPromise(3000, '3sec').then(data => {
//     console.log(data);
// });

// createDummyPromise(4000, '4sec').then(data => {
//     console.log(data);
// });

// createDummyPromise(1000, '1sec').then(data => {
//     console.log(data);
// });

// ES6
async function callPromise() {
    try {
        const r1 = await createDummyPromise(2000, '2sec');
        console.log(r1);

        const r2 = await createDummyPromise(3000, '3sec');
        console.log(r2);

        const r3 = await createDummyPromise(4000, '4sec');
        console.log(r3);

        const r4 = await createDummyPromise(1000, '1sec');
        console.log(r4);
    } catch (err) {
        console.log(err);
    }
}
callPromise();