function createDummyPromise(delay, message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    })
}

// Promise Hell -> We can use promise chaining in order to avoid promise hell.
// createDummyPromise(2000, 'Going to the Gym.').then(res => {
//     console.log(res);
//     createDummyPromise(1000, 'Eating breakfast.').then(res => {
//         console.log(res);
//         createDummyPromise(2000, 'Taking a shower.').then(res => {
//             console.log(res);
//         }).catch(err => {
//             console.log(err);
//         })
//     }).catch(err => {
//         console.log(err);
//     })
// }).catch(err => {
//     console.log(err);
// })

createDummyPromise(2000, 'Going to the Gym').then(res => {
    console.log(res);
    return createDummyPromise(1000, 'Having breakfast.');
}).then(res => {
    console.log(res);
    return createDummyPromise(2000, 'Taking a shower.');
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})