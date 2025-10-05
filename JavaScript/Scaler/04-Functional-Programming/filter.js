const transactions = [1000, 2000, 3000, -4000, 5000];

const callBack = (amount) => amount > 0;

const positiveTransactions = transactions.filter(callBack);
console.log(positiveTransactions);