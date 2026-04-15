const transactions = [1000, 3000, 5000, 7000];
const UsdToInr = 93.9;

const convertToDollars = transactions.map(amount => Math.round(amount / UsdToInr));
console.log(convertToDollars);