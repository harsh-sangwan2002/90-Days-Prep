const toss = new Promise((resolve, reject) => {

    const isHead = Math.random() > 0.5;

    if (isHead)
        resolve("Success");

    else
        reject("Failure");
})

toss.then(data => {
    console.log("then-> ", data);
}).catch(err => {
    console.log("catch-> ", err);
})