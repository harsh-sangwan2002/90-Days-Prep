const res = new Promise((resolve, reject) => {

    const current_marks = 70, passing_marks = 80;

    if (current_marks > passing_marks)
        resolve("Passed");

    else
        reject("Failed");
})

res.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})