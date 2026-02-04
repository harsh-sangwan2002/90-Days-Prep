// Callback function
setTimeout(() => {
    console.log("Timer");
}, 5000);

function x(y) {
    console.log("x");
    y();
}
x(function () {
    console.log('y');
});

document.getElementById('button').addEventListener('click', function () {
    console.log("Button clicked");
})