const transactions = [
    { customerId: 1, amount: 50, date: '2023-01-15' },
    { customerId: 2, amount: 30, date: '2023-01-16' },
    { customerId: 1, amount: 20, date: '2023-01-15' },
    { customerId: 3, amount: 70, date: '2023-01-18' },
    { customerId: 2, amount: 40, date: '2023-01-15' },
    { customerId: 1, amount: 60, date: '2023-01-20' },
]

// Question 1: Calculate total transaction count
const totalTransactionCount = () => transactions.length;
console.log(totalTransactionCount());

// Question 2: Calculate total transaction amount
const totalTransactionAmount = () => transactions.reduce((sum, ele) => sum + ele.amount, 0);
console.log(totalTransactionAmount());

// Question 3: Calculate transaction by date
const groupTransactionsByDate = () => transactions.reduce((acc, ele) => {

    if (acc[ele.date]) {
        acc[ele.date].push(ele)
    } else {
        acc[ele.date] = [ele]
    }

    return acc;
}, {})
console.log(groupTransactionsByDate());