const transactions = [1000, 2000, 3000, 4000, 5000];
const inrToUSD = 80;

const amountInUSD = transactions.map(amount => amount / inrToUSD);
console.log(amountInUSD);