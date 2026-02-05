/*
Write an SQL query to report all the classes that have at least five students.

Return the result table ordered by class in descending order.
*/
Select 
    class
From 
    courses
Group By
    class
Having
    Count(student) >=5
Order By
    class desc;