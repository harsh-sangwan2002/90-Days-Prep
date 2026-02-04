/*
Write an SQL query to report all customers (as 'Customers') who never order anything.

Return the resultant table ordered by customer names .
*/
Select 
    c.name Customers
From
    Customers c 
Left Join
    Orders o 
On
    c.id = o.customerId
Where
    o.id Is Null
Order By
    Customers;