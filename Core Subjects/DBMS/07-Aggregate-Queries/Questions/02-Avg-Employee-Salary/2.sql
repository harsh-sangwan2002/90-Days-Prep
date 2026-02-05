/*
Write a query to get the details of the average salary of the employees for each department.

Save the new column as 'avg_employee_salary'
Return the result order by avg_employee_salary in descending order and department_id in ascending order.
*/
Select 
    department_id,
    avg(salary) avg_employee_salary
From 
    employees 
Group By
    department_id
Order By
    avg_employee_salary desc,
    department_id;