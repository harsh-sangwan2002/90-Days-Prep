console.log("Start");

setImmediate(() => {
    console.log("setImmediate");
})

setTimeout(() => {
    console.log("setTimeout");
}, 0)

Promise.resolve('promise').then(val => {
    console.log(val);
})

process.nextTick(() => {
    console.log("process.nextTick");
})

console.log("End");