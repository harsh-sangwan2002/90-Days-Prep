const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved value');
    }, 5000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved value');
    }, 10000);
})

// await can be used in top-level bodies or inside async function
async function handlePromise() {
    console.log("Hello World!");

    setTimeout(async () => {
        const val = await p1;
        console.log("Namaste JS 1");
        console.log(val);

        const val2 = await p2;
        console.log("Namaste JS 2");
        console.log(val2);
    }, 6000);
}
handlePromise();

function getData() {
    p.then(val => {
        console.log(val);
    }).catch(err => {
        console.log(err);
    })
    console.log("Namaste JS");
}
// getData();