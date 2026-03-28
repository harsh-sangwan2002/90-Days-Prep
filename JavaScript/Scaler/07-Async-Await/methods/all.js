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

const p1 = createDummyPromise(2000, '2sec');
const p2 = createDummyPromise(1000, '1sec');
const p3 = createDummyPromise(20000, '20sec');

// Gets resolved if all the promises are resolved
// Gets rejected if any of the promise rejected
try {
    // setTimeout(async () => {
    //     const res = await Promise.all([p1, p2]);
    //     console.log(res);
    // }, 3000);

    // 2 seconds
    // const res = await Promise.all([p1, p2]);
    // console.log(res);

    // const res3 = await Promise.all([p1, p2, p3]);
    // console.log(res3);

    // 3 seconds
    const res2 = await Promise.all([
        createDummyPromise(2000, '2sec'),
        createDummyPromise(1000, '1sec')
    ]);
    console.log(res2);
} catch (err) {
    console.log(err);
}