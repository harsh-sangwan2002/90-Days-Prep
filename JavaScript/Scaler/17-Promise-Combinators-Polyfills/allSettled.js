function fetchAllUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' },
                { id: 3, name: 'Charlie' }
            ];
            reject(users);
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
            reject(posts);
        }, 3000);
    });
}

// Gives results of all promises, regardless of resolve/reject
Promise.allSettled([fetchAllUsers(), fetchAllUserPosts()])
    .then(val => {
        console.log('Fetched data:', val);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });