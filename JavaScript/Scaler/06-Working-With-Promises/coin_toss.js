const toss = new Promise((resolve, reject) => {

    const isHead = Math.random() > 0.5;

    if (isHead)
        resolve("It's Head");

    else
        reject("It's Tail");
})

console.log(toss);

toss.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

console.log(toss);