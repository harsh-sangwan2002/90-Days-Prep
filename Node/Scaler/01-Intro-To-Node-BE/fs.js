const fs = require('fs');

// Reading a file
// fs.readFile('f1.txt', 'utf-8', (err, data) => {
//     if (err)
//         console.log(err);

//     else
//         console.log(data.toString());
// })

// // Writing to a file
// const content = 'This is the new content for f2.txt file';
// fs.writeFile('f2.txt', content, (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('File written successfully');
// })

// // Renaming a file
// fs.rename('f1.txt', 'renamed_f1.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('File renamed successfully');
// })

// // Deleting a file
// fs.unlink('f3.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('File deleted successfully');
// })

// // Statistics of a file
// fs.stat('f2.txt', (err, stats) => {
//     if (err)
//         console.log(err);
//     else
//         console.log(stats);
// })

// Creating a directory
fs.mkdir('new_directory', (err) => {
    if (err)
        console.log(err);
    else
        console.log('Directory created successfully');
})

// Checking if a file or directory exists
if (fs.existsSync('f2.txt')) {
    console.log('f2.txt exists');
} else {
    console.log('f2.txt does not exist');
}