console.log("Start");

process.nextTick(() => {
    console.log("Next Tick 1"); // Microtask Queue (Higher Priority)
})

Promise.resolve(1).then(res => {
    console.log("Promise Resolved", res); // Microtask Queue (Higher Priority)
}).catch(err => {
    console.log("Promise Rejected", err);
})

setTimeout(() => {
    console.log("Set Timeout");
}, 0)

setInterval(() => {
    console.log("Set Interval");
}, 1000)

setImmediate(() => {
    console.log('setImmediate');
});

process.nextTick(() => {
    console.log("Next Tick 2"); // Microtask Queue (Higher Priority)
})

console.log("End");