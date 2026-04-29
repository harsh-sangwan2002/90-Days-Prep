const toss = new Promise((resolve, reject) => {

    const isHead = Math.random() > 0.5;

    if (isHead)
        resolve('Resolved');

    else
        reject('Rejected');
})

// ES5
function doFlip() {
    console.log('A');

    toss.then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })

    console.log('B')
}
// doFlip();

// ES6
async function doFlipES6() {
    console.log('A');

    try {
        const r1 = await toss;
        console.log(r11);
    } catch (err) {
        console.log(err);
    }

    console.log('B');
}
doFlipES6();