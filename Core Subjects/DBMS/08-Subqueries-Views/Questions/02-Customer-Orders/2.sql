/*
Write a query to find all the customers who have not ordered anything.

Return the name of the customers as 'Customers'.
*/
Select 
    Name Customers
From
    customers
Where
    Id Not In
    (Select Cust_id From orders);