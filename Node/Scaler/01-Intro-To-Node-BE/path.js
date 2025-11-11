const path = require('path');

console.log('filepath', __filename);
console.log('dirname', __dirname);
console.log('isAbsolute', path.isAbsolute(__filename));
console.log('separator', path.sep);
console.log('delimiter', path.delimiter);

console.log('path', process.env.PATH);

console.log('extension', path.extname(__filename));
console.log('basename', path.basename(__filename));
console.log('dirname', path.dirname(__filename));