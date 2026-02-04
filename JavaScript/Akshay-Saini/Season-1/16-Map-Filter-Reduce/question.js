const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
]

// Get the full names for every user
const fullNames = users.map(obj => obj.firstName + " " + obj.lastName);
console.log(fullNames);

// Map age:count
const age = users.reduce((acc, obj) => {
    if (acc[obj.age])
        acc[obj.age]++;

    else
        acc[obj.age] = 1;

    return acc;
}, {})
console.log(age);

const output = users.filter(obj => obj.age < 30).map(obj => obj.firstName + " " + obj.lastName);
console.log(output);