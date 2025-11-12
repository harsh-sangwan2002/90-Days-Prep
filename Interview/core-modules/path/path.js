const path = require('path');

const filePath = path.join('folder', 'subfolder', 'file.txt');
console.log('Joined Path:', filePath);

const baseName = path.basename(filePath);
console.log('Base Name:', baseName);

const dirName = path.dirname(filePath);
console.log('Directory Name:', dirName);

const extName = path.extname(filePath);
console.log('Extension Name:', extName);

const parsedPath = path.parse(filePath);
console.log('Parsed Path:', parsedPath);

const formattedPath = path.format(parsedPath);
console.log('Formatted Path:', formattedPath);

const isAbsolutePath = path.isAbsolute(filePath);
console.log('Is Absolute Path:', isAbsolutePath);

const relativePath = path.relative('folder', filePath);
console.log('Relative Path:', relativePath);

const normalizedPath = path.normalize('folder//subfolder///file.txt');
console.log('Normalized Path:', normalizedPath);

const resolvedPath = path.resolve('folder', 'subfolder', 'file.txt');
console.log('Resolved Path:', resolvedPath);

const sep = path.sep;
console.log('Path Separator:', sep);

const delimiter = path.delimiter;
console.log('Path Delimiter:', delimiter);