function fetchAllUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' },
                { id: 3, name: 'Charlie' }
            ];
            resolve(users);
        }, 1000);
    });
}

function fetchAllUserPosts() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = [
                { id: 1, userId: 1, title: 'Post by Alice' },
                { id: 2, userId: 2, title: 'Post by Bob' },
                { id: 3, userId: 3, title: 'Post by Charlie' }
            ];
            resolve(posts);
        }, 3000);
    });
}

Promise.all = function (promises) {

    return new Promise((resolve, reject) => {

        let res = [], promisesSettled = 0;

        promises.forEach((promise) => {

            promise.then((val) => {
                res.push(val);
                promisesSettled++;
                if (promisesSettled === promises.length) {
                    resolve(res);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    })
}

// Resolves if all promises resolve, otherwise rejects
Promise.all([fetchAllUsers(), fetchAllUserPosts()])
    .then(val => {
        console.log('Fetched data:', val);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });