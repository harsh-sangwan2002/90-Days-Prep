function createDummyPromise(delay, message) {
    return new Promise((resolve, reject) => {

        const TIMEOUT = 5000;

        if (delay > TIMEOUT)
            reject("Delay is more than 5sec");

        else
            setTimeout(() => {
                resolve(message);
            }, delay);
    })
}

createDummyPromise(2000, 'Hitting the GYM').then(data => {
    console.log(data);
    return createDummyPromise(1000, 'Taking a shower')
}).then(data => {
    console.log(data);
    return createDummyPromise(3000, 'Eating breakfast');
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})