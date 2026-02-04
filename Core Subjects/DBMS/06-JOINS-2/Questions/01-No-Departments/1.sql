/*
Write a query to display the details of all those departments that don't have any working employees.

Result:

Return the columns 'department_id', and 'department_name'.
Return the results ordered by 'department_id' in ascending order. 
*/
Select 
    d.department_id,
    d.department_name
From 
    employees e
Right Join
    departments d 
On
    e.department_id = d.department_id
Where
    e.employee_id Is Null
Order By
    d.department_id;