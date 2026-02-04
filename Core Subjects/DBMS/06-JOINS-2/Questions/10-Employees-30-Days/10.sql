/*
Write an SQL query to retrieve the names of employees along with the names of their mentors (as 'mentor_name'). Include only employees who have mentors, and the mentor relationship is established when an employee is hired within 30 days of their mentor.

Return the output ordered by mentor_name in ascending order.

Note: You may use DATE_ADD() funcion here. The DATE_ADD() function adds a time/date interval to a date and then returns the date.
*/
Select 
    e.employee_name,
    m.employee_name mentor_name
From 
    Employees e 
Join
    Employees m
On
    e.mentor_id = m.employee_id And
    Date_Add(e.hire_date, interval -30 day) <= m.hire_date 
Order By
    mentor_name;