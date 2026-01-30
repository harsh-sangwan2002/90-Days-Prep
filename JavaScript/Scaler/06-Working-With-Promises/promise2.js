function createDummyPromise(delay, message) {

    const pr = new Promise((resolve, reject) => {

        const TIMEOUT = 5000;
        if (delay > TIMEOUT) {
            reject("Max delay can be 5000ms");
        }

        else {
            setTimeout(() => {
                resolve(message);
            }, delay);
        }
    });

    return pr;
}

// createDummyPromise(6000, "Promise 1 resolved after 6 seconds").then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log("catch-> " + err);
// });

// createDummyPromise(3000, "Promise 2 resolved after 3 seconds").then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log("catch-> " + err);
// });

// createDummyPromise(2000, "Promise 3 resolved after 2 seconds").then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log("catch-> " + err);
// });

createDummyPromise(1000, 'Wake Up').then((data) => {
    console.log(data);
    return createDummyPromise(2000, 'Brush Teeth');
}).then((data) => {
    console.log(data);
    return createDummyPromise(3000, 'Take a Shower');
}).then((data) => {
    console.log(data);
    return createDummyPromise(4000, 'Have Breakfast');
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("catch-> " + err);
});