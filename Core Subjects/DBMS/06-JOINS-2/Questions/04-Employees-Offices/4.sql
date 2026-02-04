/*
Write a SQL query to get all the possible combinations of employees and offices.

Return the output ordered by employeeNumber and officeCode in ascending order.
*/
Select 
    e.employeeNumber,
    e.firstName,
    e.lastName,
    o.officeCode,
    o.city
From 
    offices o
Cross Join
    employees e
Order By
    e.employeeNumber,
    o.officeCode;