const toss = new Promise((resolve, reject) => {
    const isHead = Math.random() > 0.5;

    if (isHead)
        resolve('Head');

    else
        reject('Tail');
})

function doFlip() {
    console.log("A");

    toss.then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })

    console.log('B');
}
// doFlip();

async function doFlipES6() {
    console.log('A');

    const res = await toss;
    console.log(res);

    console.log('B');
}
doFlipES6();