const res = new Promise(function (resolve, reject) {

    console.log("Passing marks are 70");
    // Passing marks are 70%
    const passing_marks = 70, current_marks = 80;

    if (current_marks > passing_marks)
        resolve('Passed!');

    else
        reject('Failed!');
})

console.log(res);

res.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

const toss = new Promise(function (res, rej) {

    console.log("toss");
    const isHead = Math.random() > 0.5;

    if (isHead)
        res('Promise resolved');

    else
        rej('Promise rejected');
})

console.log(toss);
toss.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})