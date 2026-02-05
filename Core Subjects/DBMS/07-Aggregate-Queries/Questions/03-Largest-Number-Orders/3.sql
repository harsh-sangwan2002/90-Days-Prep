/*
Write an SQL query to find the customer_number for the customer who has placed the largest number of orders.

The test cases are generated so that exactly one customer will have placed more orders than any other customer.
*/
Select 
    customer_number
From 
    Orders
Group By
    customer_number
Order By
    count(customer_number) desc
Limit 1;