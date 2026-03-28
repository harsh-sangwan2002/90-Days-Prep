function createDummyPromise(delay, message) {

    return new Promise((res, rej) => {

        const TIMEOUT = 5000;

        if (delay > TIMEOUT)
            rej("The delay is more than 5 seconds");

        else {
            setTimeout(() => {
                res(message);
            }, delay);
        }
    })
}

const p1 = createDummyPromise(1000, "Will be fulfilled after 1 sec");
console.log(p1);
p1.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

const p2 = createDummyPromise(2000, "Will be fulfilled after 2 sec");
console.log(p2);
p2.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

const p3 = createDummyPromise(3000, "Will be fulfilled after 3 sec");
console.log(p3);
p3.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

const p4 = createDummyPromise(6000, "Will be fulfilled after 6 sec");
console.log(p4);
p4.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})