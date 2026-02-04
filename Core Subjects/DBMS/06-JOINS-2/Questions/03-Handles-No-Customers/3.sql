/*
Write a SQL query to find the employee details who handles no customers.

Result:

Use the given customers table.
Return the output ordered by employeeNumber in ascending order.
The salesRepEmployeeNumber column refers to the employeeNumber who made sales to the customers.
*/
Select 
    e.employeeNumber,
    e.firstName,
    e.lastName
From 
    customers c 
Right Join
    employees e 
On
    c.salesRepEmployeeNumber = e.employeeNumber 
Where
    c.customerNumber Is Null
Order By
    e.employeeNumber;