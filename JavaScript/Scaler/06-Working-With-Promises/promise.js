const res = new Promise(function (resolve, reject) {

    // Passing marks are 70%
    const passing_marks = 70, current_marks = 80;

    if (current_marks > passing_marks)
        resolve('Passed!');

    else
        reject('Failed!');
})

res.then(data => {
    console.log(data);
    console.log(res);
}).catch(err => {
    console.log(err);
    console.log(res);
})

const toss = new Promise(function (res, rej) {

    const isHead = Math.random() > 0.5;

    if (isHead)
        res('Promise resolved');

    else
        rej('Promise rejected');
})

toss.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})