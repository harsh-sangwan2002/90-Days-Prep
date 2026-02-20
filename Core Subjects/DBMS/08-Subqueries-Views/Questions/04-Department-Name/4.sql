/*
We are interested in employees working in the 'Administration', 'Marketing', and 'Human Resources' departments.
For each qualifying employee, we want to retrieve the employee_id, full_name (first and last name separated by space), and salary.
Use CONCAT() function to add 2 strings.
We want the final results to be ordered by employee_id in ascending order for easier reference.
*/
Select 
    e.employee_id,
    Concat(first_name," ",last_name) full_name,
    salary
From 
    employees e 
Join
    departments d 
On
    e.department_id = d.department_id And
    department_name In ("Administration","Marketing","Human Resources")
Order By
    e.employee_id;