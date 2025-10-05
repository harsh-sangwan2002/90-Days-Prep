const transactions = [1000, 2000, 3000, 4000, 5000];

const callBack = (amount, acc) => acc + amount;

const totalTransactionsValue = transactions.reduce(callBack, 0);
console.log(totalTransactionsValue);