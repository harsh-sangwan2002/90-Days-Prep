// async function always returns a promise
async function getData() {
    return "Namaste";
}

const data = getData();
// console.log(data);
data.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})