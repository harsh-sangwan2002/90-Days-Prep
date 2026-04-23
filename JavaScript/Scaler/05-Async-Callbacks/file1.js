// Example - 1
// console.log('1');

// for (let i = 2; i < 5; i++)
//     console.log(i);

// console.log(10);

// Example - 2
// console.log('A');

// while (true) {
//     console.log('B');
// }

// console.log('C');

// Example - 3
// console.log('A');

// setTimeout(() => {
//     console.log('B');
// }, 1000);

// console.log('C');

// Example - 4
// console.log('A');

// setTimeout(() => {
//     console.log('B');
// }, 1000);

// setTimeout(() => {
//     console.log('C');
// }, 1000);

// setTimeout(() => {
//     console.log('D');
// }, 1000);

// console.log('E');

// Example - 5
// function grandParent() {
//     console.log('Grand Parent');
// }

// function parent() {
//     grandParent();
//     console.log('Parent');
// }

// function child() {
//     parent();
//     console.log('Child');
// }

// child();

// Example - 6
// console.log('A');

// setTimeout(() => {
//     console.log('B');
// }, 1000);

// Promise.resolve('C').then(val => {
//     console.log(val);
// })

// console.log('D');

// Example - 7
let i = 100;
setInterval(() => {
    console.log(i);
    i--;
}, 1000);