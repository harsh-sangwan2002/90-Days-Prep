const transactions = [1000, 2000, 3000, 4000, 5000];

const totalAmount = transactions.reduce((acc, ele) => acc + ele, 0);
console.log(totalAmount);