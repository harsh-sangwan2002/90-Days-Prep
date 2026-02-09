-- Select all the columns from the film table
Select * from film;

Select title, description from film;

-- aliasing
Select film_id id from film;
Select film_id, title as film_name from film;

-- Distinct
Select distinct rating from film;
-- It applies on the set of columns
Select distinct release_year, rating from film;

Select 1 from film;

Select true from film;

Select false from film;

Select title, "Hello World" from film;

Select title, length from film;

Select title, length/60 from film;

Select title, Round(length/60) duration_in_hours from film;

Select * from city;

-- I want to apply filter on rows based on some condition
Select title, rating from film where rating = "PG-13";

Select release_year, rating from film
Where rating = "PG-13" || release_year = 2006;

Create table city_copy(
city_name Varchar(60)
);

Insert Into city_copy (city_name)
Select city from city;

Select * from city_copy;