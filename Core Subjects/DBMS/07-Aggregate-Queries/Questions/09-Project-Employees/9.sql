/*
Write an SQL query that reports the average experience years (As 'average_years') of all the employees for each project, rounded to 2 digits.

Return the result table ordered by project_id in ascending order.
*/
Select 
    project_id,
    round(avg(experience_years),2) average_years
From 
    project p
Join
    employee e 
On
    p.employee_id = e.employee_id
Group By
    project_id
Order By 
    project_id;