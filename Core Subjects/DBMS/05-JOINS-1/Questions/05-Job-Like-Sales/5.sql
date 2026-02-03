/*
Display the details of employees who held positions with 'sales' in the job title during their past assignments (as recorded in their job history). Only include records where the base minimum salary defined for that historical role is 6000 or greater.

Result:

Return the columns 'employee_id', 'department_name', 'job_id', 'job_title', and 'min_salary'.
Return the employee's current information for the columns 'employee_id', and 'department_name'.
Return the employee's past information for the columns 'job_id', 'job_title', and 'min_salary'.
Return the output ordered by employee_id and min_salary in ascending order.
*/
Select 
    e.employee_id,
    d.department_name,
    j.job_id,
    j.job_title,
    j.min_salary
From
    employees e
Join
    departments d 
On
    e.department_id = d.department_id
Join
    job_history jh 
On 
    e.employee_id = jh.employee_id
Join 
    jobs j 
On 
    jh.job_id = j.job_id And
    j.job_title like '%Sales%' And 
    j.min_salary >= 6000
Order By
    e.employee_id,
    j.min_salary;