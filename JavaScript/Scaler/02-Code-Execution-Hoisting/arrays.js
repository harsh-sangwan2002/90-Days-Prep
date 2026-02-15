var students = ["Kartik", "Namrata", "Saransh", "John", "Pankaj"];
console.log(students);
console.log(students.length);

// returns the length of new array
console.log("push-> ", students.push("Sakshi"));
console.log(students);

// returns the element from the end
console.log("pop-> ", students.pop());
console.log(students);

// returns element from the start
console.log("shift-> ", students.shift());
console.log(students);

// returns the length of new array
console.log("unshift-> ", students.unshift("Sakshi"));
console.log(students);

// returns the removed elements in an array
// console.log("splice-> ", students.splice(2, 3));
// console.log(students);

// returns an array containing elements from start to end-1
console.log("slice-> ", students.slice(1, 3));
console.log(students);

console.log(students.indexOf("Saransh"));
console.log(students.find(st => st.length > 3));
console.log(students.findIndex(st => st.length > 3));

console.log(Array.from(students));
console.log(Array.from([1, 2, 3, 4]));