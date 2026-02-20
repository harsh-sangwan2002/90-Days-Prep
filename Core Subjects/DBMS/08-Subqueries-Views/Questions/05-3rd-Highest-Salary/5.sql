/*
Problem Statement:

Write a SQL query to find all the details of employees who earn the third-highest salary.

Return all the columns from the employees table.
Avoid using the LIMIT keyword in the query.
*/
Select * from employees Where salary = 
(Select max(e1.salary) from employees e1 Where e1.salary <
(Select max(e2.salary) from employees e2 Where e2.salary < 
(Select max(e3.salary) from employees e3)));