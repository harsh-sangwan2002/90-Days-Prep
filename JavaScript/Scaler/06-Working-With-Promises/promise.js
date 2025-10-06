const promise = new Promise((resolve, reject) => {

    const passing_marks = 75;
    let current_marks = 85;

    if (current_marks >= passing_marks) {
        resolve("Student has passed");
    } else {
        reject("Student has failed");
    }
})

const toss = new Promise((resolve, reject) => {
    const isHead = Math.random() > 0.5;
    if (isHead == 0) {
        resolve("Head");
    } else {
        reject("Tail");
    }
})

console.log('Before');

promise.then((data) => {
    console.log("then-> " + data);
}).catch((err) => {
    console.log("catch-> " + err);
})

toss.then((data) => {
    console.log("then-> " + data);
}).catch((err) => {
    console.log("catch-> " + err);
})

console.log('After');