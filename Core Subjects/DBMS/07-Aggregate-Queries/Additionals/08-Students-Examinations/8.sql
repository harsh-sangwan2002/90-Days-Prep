/*
Write an SQL query to find the number of times (as 'attended_exams') each student attended each exam.

Return the result table ordered by student_id and subject_name.
*/
Select 
    st.student_id, 
    st.student_name, 
    sb.subject_name, 
    count(e.student_id) as attended_exams
From 
    students st
Cross Join 
    subjects sb
left join
    examinations e
On 
    e.student_id = st.student_id
    and e.subject_name = sb.subject_name
Group by 
    st.student_id, 
    sb.subject_name
Order by 
    st.student_id,
    sb.subject_name;