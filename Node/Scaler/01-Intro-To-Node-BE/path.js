const path = require('path');

// Join multiple path segments
let fullPath = path.join('folder', 'subfolder', 'file.txt');
console.log(fullPath);

// Create an absolute path
fullPath = path.resolve('folder', 'subfolder', 'file.txt');
console.log(fullPath);

// Extract components of the path
let basename = path.basename(fullPath);
console.log(basename);

// Extract components of the path
let dirname = path.dirname(fullPath);
console.log(dirname);

// Extract file extension
let extname = path.extname(fullPath);
console.log(extname);

// Parse and format the path
let parsedPath = path.parse(fullPath);
console.log(parsedPath);

// Format the path back to string
let formattedPath = path.format(parsedPath);
console.log(formattedPath);

// Check if the path is absolute
let isAbsolute = path.isAbsolute(fullPath);
console.log(isAbsolute);

// Get relative path from one location to another
let relativePath = path.relative('folder', fullPath);
console.log(relativePath);

// Normalize a path
let normalizedPath = path.normalize('folder//subfolder///file.txt');
console.log(normalizedPath);

// Get path separator and delimiter
let sep = path.sep;
console.log(sep);

let delimiter = path.delimiter;
console.log(delimiter);