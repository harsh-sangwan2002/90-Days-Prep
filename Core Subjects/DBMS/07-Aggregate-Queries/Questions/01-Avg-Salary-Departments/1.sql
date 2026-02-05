/*
Write a SQL query to print department name along with department wise average salary. The average salary should be rounded to 2 decimal places.
*/
Select 
    department_name,
    round(avg(salary),2) average_salary
From 
    employee e 
Join
    department d 
On
    e.department_id = d.department_id
Group By
    department_name
Order By
    department_name;