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

createDummyPromise(20000, '20sec').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
createDummyPromise(3000, '3sec').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
createDummyPromise(5000, '5sec').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
createDummyPromise(1000, '1sec').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})