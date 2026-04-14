const arr = ["Kartik", "Namrata", "Saransh", "John", "Pankaj"];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr.length); // 5

// Adds element at the end and returns the length of the new array
console.log("push-------------");
console.log(arr.push("Harsha")); // 6
console.log(arr);

// Removes element from the end and returns the removed element
console.log("pop-------------");
console.log(arr.pop()); // Harsha
console.log(arr);

// Adds element at the start and returns the lenght of the new array
console.log("unshift-------------");
console.log(arr.unshift("Harsh")); // 6
console.log(arr);

// Removes element from the start and returns the removed element
console.log("shift-------------");
console.log(arr.shift()); // Harsh
console.log(arr);

// Removes element from the specified position and returns the removed elements array
console.log("splice-------------");
console.log(arr.splice(1, 3)); // ["Namrata","Sarnash","John"]
console.log(arr);

// Returns the array of elements from startIdx to endIdx-1
console.log("slice-------------");
console.log(arr.slice(0, 1)); //
console.log(arr);