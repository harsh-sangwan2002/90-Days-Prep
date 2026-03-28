/*
Show names of all the students
    1) List of all Student IDs
    2) Get names of all the students using IDs
*/
const createDummyPromise = (delay, message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    })
}

createDummyPromise(2000, 'Fetched student IDs.').then(res => {
    console.log(res);
    return createDummyPromise(1000, 'Fetched names of all the students using their IDs.');
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})