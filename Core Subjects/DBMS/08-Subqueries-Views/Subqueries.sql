use sakila;
/*
Find all the years where the average rental_rate of films of that year
was greater than the global average of rental_rate
*/

-- 1. Find the global average of rental_rate of all films - x
-- 2. Find average of all the years
-- 3. Filter those years whose average is greater than global average

Select * from film;

Select avg(rental_rate)
From film;

Select release_year, avg(rental_rate)
From film
Group By (release_year)
Having avg(rental_rate) > (
	Select avg(rental_rate)
	From film
);