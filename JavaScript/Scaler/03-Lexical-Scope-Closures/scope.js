// function global() {
//     var g = "global";
//     console.log(g, o, i);

//     function outer() {
//         var o = "outer";
//         console.log(g, o, i);

//         function inner() {
//             var i = "inner";
//             console.log(g, o, i);
//         }
//         inner();
//     }
//     outer();
// }

// global();

// Closure - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.
function global() {
    var g = "global";
    console.log(g);

    function outer() {
        var o = "outer";
        console.log(g, o);

        function inner() {
            var i = "inner";
            console.log(g, o, i);
        }
        inner();
    }
    outer();
}

// global();

function isHoliday(date) {

    var holidays = ['22/04/2026'];
    var res = '';

    if (holidays.includes(date)) {
        var logData = "Yeah! It's a holiday";
        res = 'Yes'
    }

    console.log(logData, res);
}
isHoliday('22/04/2026');