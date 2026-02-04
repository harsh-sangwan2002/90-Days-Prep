/*
Write a query to find the employee_id of the employees whose salary is strictly less than 15000 and whose manager left the company.

When a manager leaves the company, their information is deleted from the employees table, but the reporters still have their manager_id set to the manager that left.

Result:

Return the column 'employee_id'
Return the result ordered by employee_id in ascending order.
*/
Select 
    e.employee_id
From
    employees e 
Left Join
    employees m
On
    e.manager_id = m.employee_id And
    e.salary < 15000
Where
    m.employee_id Is Null And
    e.manager_id Is Not Null
Order By
    e.employee_id;