/*
Write an SQL query to find the team size (as 'team_size') of each of the employees.

Return result table ordred by employee_id in ascending order.
*/
Select
    e1.employee_id,
    (Select count(*) From employee e2 Where e1.team_id = e2.team_id) team_size
From 
    employee e1
Order By
    e1.employee_id;