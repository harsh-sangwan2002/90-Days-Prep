const transactions = [1000, 2000, 3000, 4000, 5000];
const InrToUsd = 80;

const conversionToDollars = transactions.map(amount => Math.round(amount / InrToUsd));
console.log(conversionToDollars);