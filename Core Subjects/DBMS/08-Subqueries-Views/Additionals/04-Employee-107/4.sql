/*
We want to find all employees who share the same job as the employee with employee_id 107. Additionally, you need to create a new column "full_name" by concatenating first_name and last_name, separated by space.

The result should include the columns full_name, salary, department_id, and job_id.
The result should be sorted by full_name in ascending order for easier reference.
*/
Select
    Concat(first_name," ",last_name) full_name,
    salary,
    department_id,
    job_id
From
    employees 
Where
    job_id like
    (Select job_id from employees where employee_id = 107)
Order By
    full_name;