function x() {
    var i = 1;

    setTimeout(() => {
        console.log(i);
    }, 3000);

    console.log("Namaste JavaScript");
}
// x();

function y() {

    // for (var i = 1; i <= 5; i++) {
    //     setTimeout(() => {
    //         console.log(i);
    //     }, i * 1000);
    // }

    // for (let i = 1; i <= 5; i++) {
    //     setTimeout(() => {
    //         console.log(i);
    //     }, i * 1000);
    // }

    for (let i = 1; i <= 5; i++) {
        function fn(i) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }
        fn(i);
    }
}
y();