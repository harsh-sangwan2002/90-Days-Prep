/*
Write an SQL query to find the id and the name of all students who are enrolled in departments that no longer exist.

Return the result table in ordered by id in ascending order.
*/
Select 
    s.id,
    s.name
From 
    students s
Left Join
    departments d 
On
    s.department_id = d.id
Where
    d.id Is Null
Order By
    s.id;