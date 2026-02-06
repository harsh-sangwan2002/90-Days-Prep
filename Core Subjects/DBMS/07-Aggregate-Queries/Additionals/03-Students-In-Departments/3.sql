/*
Write a query to list every department name and the total number of students who belong to it.

If a department has students, show the total count.
If a department is empty, it must still appear in your list with a count of 0.
Result:

Return the columns dept_name and student_number.
Order the result table by student_number in descending order. In case of a tie, order them by dept_name alphabetically.
*/
Select 
    dept_name,
    Count(student_id) student_number
From 
    department d 
Left Join
    student s 
On
    d.dept_id = s.dept_id
Group By
    dept_name
Order By 
    student_number desc,
    dept_name;