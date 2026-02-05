/*
Write an SQL query to show the unique ID of each user, If a user does not have a unique ID replace just show null.

Return the results ordered by id (not 'unique_id') in ascending order.
*/
Select 
    unique_id
From 
    employees e 
Left Join
    employeeUNI u
On
    e.id = u.id
Order By
    e.id;