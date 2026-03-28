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

/* 
Promises start executing immediately when they are created  because the executor function runs synchronously. 
The await keyword does not start execution; it only waits for the promise to resolve. 
So even if await is used later, the promise may already be resolved.
*/
const p1 = createDummyPromise(2000, '2sec');
const p2 = createDummyPromise(1000, '1sec');

try {

    // const r1 = await createDummyPromise(20000, '20sec');
    // console.log(r1);

    // const r2 = await createDummyPromise(2000, '2sec');
    // console.log(r2);

    // const r3 = await createDummyPromise(1000, '1sec');
    // console.log(r3);

    // const r4 = await createDummyPromise(3000, '2sec');
    // console.log(r4);

    const r5 = await p1;
    console.log(r5);

    const r6 = await p2;
    console.log(r6);

    setTimeout(async () => {
        const r5 = await p1;
        console.log(r5);

        const r6 = await p2;
        console.log(r6);
    }, 3000);
} catch (err) {
    console.log("Inside catch");
    console.log(err);
}