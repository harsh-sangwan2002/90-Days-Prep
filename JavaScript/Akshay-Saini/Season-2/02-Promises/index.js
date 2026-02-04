const cart = ["shoes", "pants", "kurta", "saree"];

// A promise is an object representing eventual completion/failure of an async operation.
// const promise = api.createOrder(cart);

// promise.then(orderId => {
//     console.log(orderId);
// }).catch(err => {
//     console.log(err);
// })

const GITHUB_API = "https://api.github.com/users/harsh-sangwan2002";
const user = fetch(GITHUB_API);

console.log(user);
// A promise can have pending, fulfilled and rejected state
user.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
