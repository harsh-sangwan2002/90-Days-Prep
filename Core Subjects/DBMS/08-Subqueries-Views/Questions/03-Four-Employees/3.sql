/*
You need to write a SQL query to find the "full_name" (first_name and last_name, separated by space) of managers who oversee four or more employees.

The result should be ordered by full_name, lexicographically.
The column manager_id in the employees table represents the employee_id of the manager.
*/
Select 
    Concat(first_name," ",last_name) full_name
From 
    employees 
Where
    employee_id In
(Select
    manager_id
From 
    employees
Group By
    manager_id
Having
    count(manager_id)>=4
)
Order By 
    full_name;