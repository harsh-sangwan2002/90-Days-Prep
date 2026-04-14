function global() {
    var g = 'global';
    console.log(g, o, i);

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

function isHoliday(date) {

    var holidays = ['14/04/2026'];
    var result = '';

    if (holidays.includes(date)) {
        result = 'Yes';
        var logData = "Yes, it's a holiday";
    }

    else {
        result = 'No'
    }

    console.log(holidays, result, logData);
    return result;
}
isHoliday('14/04/2026');