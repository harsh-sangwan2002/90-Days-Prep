const transactions = [1000, 2000, 3000, 4000, 5000];
const inrToUsd = 80;

const callBack = (amount) => Math.trunc(amount / inrToUsd);

const usdTransactions = transactions.map(callBack);
console.log(usdTransactions);