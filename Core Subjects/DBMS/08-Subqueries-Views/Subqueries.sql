use testdb;

/* Q.1 Find all students whose psp is greater than psp of student
with id = 2
*/
-- 1. Find psp of student with id = 2 => x
Select psp from StudentPsp where id = 2;

-- 2. Find all students whose psp > x
Select * from StudentPsp where psp > x;

/*
In reality,
1) Break problems into parts
2) Solve the smaller problems & use the result to solve the bigger problem

These are called as subqueries
Subqueries are intuitive way of writing queries
They leads to bad performance due to nested loops
*/

-- 3. Solve the bigger problem
Select * from StudentPsp where psp >
(Select psp from StudentPsp where id = 2);

/* Q.2 Find all the years where average of the rental_rate of film of that year
is greater than the global average of rental_rate

1. Find the global average of rental_rate of all the films - x
2. Find the average rental_rate of all the years
3. Filter those rows whose avg rental_rate > global average
*/
use sakila;

-- 1.
Select avg(rental_rate) from film;

-- 2.
Select avg(rental_rate) from film
group by release_year;

-- 3.
Select avg(rental_rate) from film
group by release_year
Having avg(rental_rate) > 
(Select avg(rental_rate) from film);