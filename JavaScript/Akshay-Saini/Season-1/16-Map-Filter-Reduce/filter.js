const arr = [1, 2, 3, 4, 5, 6];

const evenNumbers = arr.filter(ele => ele % 2 == 0);
console.log(evenNumbers);

const oddNumbers = arr.filter(ele => ele % 2 != 0)
console.log(oddNumbers);