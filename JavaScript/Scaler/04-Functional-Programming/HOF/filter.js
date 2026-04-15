const transactions = [1000, -3000, 5000, -7000];
const UsdToInr = 93.9;

const positiveTransactions = transactions.filter(amount => amount > 0);
console.log(positiveTransactions);