var students = ["Karthik", "Namrata", "Saransh", "John", "Pankaj"];

console.log(students[0]);
console.log(students[1]);
console.log(students);

console.log("-------------------------------------------");

// Returns the new array length
// Pushes the element at the end
console.log(students.push("Harsha"));
console.log(students);

console.log("-------------------------------------------");

// Returns the removed element
// Remove element from the end
console.log(students.pop());
console.log(students);

console.log("-------------------------------------------");

// Returns the removed element
// Removes element from the start
console.log(students.shift());
console.log(students);

console.log("-------------------------------------------");

// Returns the new array length
// Add element at the start
console.log(students.unshift("Chirag"))
console.log(students);

console.log("-------------------------------------------");

// startIdx, deleteCount, elements to be added
// Modifies the original array
console.log(students.splice(2, 2, "Harsh"));
console.log(students);

console.log("-------------------------------------------");

// Doesn't modify the array
console.log(students.slice(1, 3));
console.log(students);

console.log("-------------------------------------------");

// indexOf returns the index of the element passed
console.log(students.indexOf("Harsh"))