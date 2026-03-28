const res = new Promise((resolve, reject) => {
    const marks = 80, passing_marks = 70;

    if (marks > passing_marks)
        resolve("Passed!");

    else
        reject("Failed!");
})

console.log(res);
console.log(res instanceof Promise); // true

res.then(val => {
    console.log("then -> ", val);
}).catch(err => {
    console.log("catch -> ", err);
})

console.log(res);