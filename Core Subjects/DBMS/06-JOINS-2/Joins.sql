use testdb;

Select * from Students;

Select * from Batches;

Insert Into Students
Values (6,'Jim',null),
(7,'Jenny',null);

-- 1. Inner Join
Select s.name, b.name
From Students s
Inner Join Batches b
On s.batch_id = b.id;

-- 2. Left Outer Join
Select s.name, b.name
From Students s
Left Join Batches b
On s.batch_id = b.id;

-- 3. Right Outer Join
Select s.name, b.name
From Students s
Right Join Batches b
On s.batch_id = b.id;

-- 4. Full Outer Join
Select s.name, b.name
From Students s
Left Outer Join Batches b
On s.batch_id = b.id

Union

Select s.name, b.name
From Students s
Right Outer Join Batches b
On s.batch_id = b.id;

-- 5. Cross Join
Select s.name, b.name
From Students s, Batches b;

Select s.name, b.name
From Students s
Cross Join Batches b;

Select s.name, b.name
From Students s
Join Batches b
On true;

-- Using keyword is used to join on equality and name of the column should be same on both the sides
Use sakila;

Select *
From film f
Join film_actor fa
Using (film_id);

-- Natural Join is used when two tables are joined based on equality of all the columns
Select *
From t1
Natural Join t2;