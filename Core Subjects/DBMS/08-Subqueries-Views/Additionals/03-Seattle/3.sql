/*
The goal is to write an SQL query to retrieve details of all employees whose department is located in Seattle.

The result should include the columns employee_id, first_name, last_name, and job_id.
The result should be sorted by employee_id in ascending order.
*/
Select 
    e.employee_id,
    e.first_name,
    e.last_name,
    e.job_id
From 
    employees e 
Join
    departments d 
On
    e.department_id = d.department_id
Join
    locations l 
On 
    d.location_id = l.location_id And
    l.city like "%seattle%"
Order By
    e.employee_id;