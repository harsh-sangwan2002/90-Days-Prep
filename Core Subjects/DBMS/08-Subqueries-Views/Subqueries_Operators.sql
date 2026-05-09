use testdb;

-- Q.3 Find the names of Students that are also names of TA's

-- 1. Get names of all the TA's
Select distinct(name) from users u where u.is_ta = 1;

-- 2. Get students whose names are in the TA's list
Select distinct(name) from users where u.is_student = 1
&& u.name In (Select distinct(name) from users u where u.is_ta = 1);

-- Q.4 Get me the students whose psp is greater than min psp of every batch

-- 1. Get min psp of every batch
Select min(psp) from students
Group By batch_id;

-- 2. Find student's psp
Select psp from students;

-- 3.
Select * from students
Where psp > All (Select min(psp) from students
Group By batch_id);

Select * from students
Where psp > (Select max(psp) From (Select min(psp) from students
Group By batch_id));

-- Q.5 Get me the students whose psp is greater than avg psp of his/her batch
Select psp
From students s1
Where psp > (Select avg(psp) 
From students s2
Where s1.batch_id = s2.batch_id);

-- Exists is better in performance than IN

Use sakila;
Create view title_rel_year As
(Select title, release_year from film);

Create or Replace view title_rel_year As
(Select title, release_year, description from film);

drop view title_rel_year;

Select * from title_rel_year;