/*
Write an SQL query to report all the duplicate emails.

Return the result table ordered by emails. 
*/
Select 
    distinct email
From 
    Person
Group By
    email
Having
    count(email) > 1
Order By 
    email;