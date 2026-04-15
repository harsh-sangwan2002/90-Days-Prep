const transactions = [1000, 3000, 5000, 7000];
const UsdToInr = 93.9;

const totalAmount = transactions.reduce((acc, amount) => acc + amount, 0);
console.log(totalAmount);