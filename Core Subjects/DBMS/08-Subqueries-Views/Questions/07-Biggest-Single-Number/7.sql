/*
A single number is a number that appeared only once in the MyNumbers table.

Write an SQL query to report the largest single number.

The output should contain one column num which would contain the largest single number.
*/
Select 
    num
From 
    MyNumbers
Group By
    num 
Having
    count(num) = 1
Order By 
    num desc
Limit
    1;