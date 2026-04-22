var students = ["Kartik", "Namrata", "Saransh", "John", "Pankaj"];

console.log(students[0], students[1]);
console.log(students.length);

console.log("--------------------------------------------------------");

// Adds the element at the end of the array
// Returns the new array length after adding the element
console.log(students.push("Harsha"));
console.log(students);

console.log("--------------------------------------------------------");

// Removes the element from the end of the array
// Returns the removed element from the array
console.log(students.pop());
console.log(students);

console.log("--------------------------------------------------------");

// Adds the element at the start of the array
// Returns the new array length
console.log(students.unshift("Chirag"));
console.log(students);

console.log("--------------------------------------------------------");

// Removes the element from the start of the array
// Returns the removed element from the array
console.log(students.shift());
console.log(students);

console.log("--------------------------------------------------------");

// Removes the element from index specified (startIdx, deleteCount, ele)
// Modifies the original array
console.log(students.splice(1, 2));
console.log(students);

console.log("--------------------------------------------------------");

// Returns the element from startIdx to endIdx-1
// Doesn't modify the array
console.log(students.slice(1, 2));
console.log(students);