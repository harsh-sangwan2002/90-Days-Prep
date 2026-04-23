/*
1. Show names of all the students
API 1 -> List of all student IDs
API 2 -> Name for the given ID
*/
api1().then(ids => {
    console.log(ids);
    return api2(ids);
}).then(names => {
    console.log(names);
}).catch(err => {
    console.log(err);
})