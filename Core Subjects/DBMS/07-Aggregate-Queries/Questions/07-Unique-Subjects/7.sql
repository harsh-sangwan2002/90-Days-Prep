/*
Each row in this table indicates that the teacher with teacher_id teaches the subject subject_id in the department dept_id.

Write an SQL query to report the number of unique subjects each teacher teaches in the university.
The query result format is shown in the following example.

Return the result ordered by teacher_id in ascending order.
*/
Select
    teacher_id,
    count(distinct subject_id) cnt
From 
    Teacher
Group By
    teacher_id
Order By 
    teacher_id;