/*
Write a query to report the name, bonus of each employee with a bonus of less than 1000.

Return the bonus as 'NULL' if an employee doesn't have a bonus in bonus table.
Return the result table sorted w.r.t. name of the employees in ascending order.
NOTE : Carefully analyse the Sample output.
*/
Select
    e.name,
    b.bonus
From
    employee e
Left Join
    Bonus b
On
    e.empId = b.empId
Where
    b.bonus Is Null or
    b.bonus < 1000
Order By
    e.name;