// // Example - 1
// console.log(1);

// for (let i = 0; i < 5; i++)
//     console.log(i);

// console.log(10);

// // Example - 2
// console.log('A');

// // while (true) {
// //     console.log('B');
// // }

// console.log('C');

// // Example - 3
// console.log('A');

// // JS Engine will not wait here, it will move to the next line
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
// }, 2000);

// setTimeout(() => {
//     console.log('D');
// }, 3000);

// console.log('E');

// Example - 5
// function grandParent() {
//     console.log("Grand Parent");
// }

// function parent() {
//     grandParent();
//     console.log("Parent");
// }

// function child() {
//     parent();
//     console.log("Child");
// }
// child();

// Example - 6
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0)

Promise.resolve('C').then(data => {
    console.log(data);
})

console.log("D");