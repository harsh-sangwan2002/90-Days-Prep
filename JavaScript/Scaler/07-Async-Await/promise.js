const toss = new Promise((resolve, reject) => {

    const isHead = Math.random() > 0.5;

    if (isHead)
        resolve("Head");
    else
        reject("Tail");
})

function doFlip() {
    console.log("Before the toss");

    toss
        .then(result => console.log("Result: " + result))
        .catch(error => console.log("Result: " + error));

    console.log("After the toss");
}
// doFlip();

// Using ES6 Asycn/Await
async function doFlipAsync() {

    console.log("Before the toss");

    try {
        // Suspends the execution of this function until the promise is resolved or rejected
        const result = await toss;
        console.log("Result: " + result);
        return result;
    } catch (err) {
        console.log(err);
    }

    console.log("After the toss");
}
doFlipAsync();