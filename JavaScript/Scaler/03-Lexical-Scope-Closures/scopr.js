// Question - 1
function global() {
    var g = 'global';
    console.log(g, o, i); // ReferenceError: o is not defined

    function outer() {
        var o = 'outer';
        console.log(g, o, i);

        function inner() {
            var i = 'inner';
            console.log(g, o, i);
        }
        inner();
    }
    outer();
}
// global();

// Question - 2
function global2() {
    var g = 'global';
    console.log(g); // global

    function outer() {
        var o = 'outer';
        console.log(g, o); // global outer

        function inner() {
            var i = 'inner';
            console.log(g, o, i); // global outer inner
        }
        inner();
    }
    outer();
}
// global2();

function isHoliday(date) {
    var logData, holidays, result;

    holidays = ['2024-01-01', '2024-12-25'];
    result = '';

    if (holidays.includes(date)) {
        logData = 'Holiday';
        result = 'Yes, it is a holiday';
    } else {
        result = 'No, it is not a holiday';
    }
    return result;
}
console.log(isHoliday());