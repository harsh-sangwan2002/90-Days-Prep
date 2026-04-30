-- Create database <db_name>
-- Use <db_name>
use sakila;

Select * from film;
Select count(*) from film;
/*
I want to insert some rows in the film table

Insert Into <table_name> (col1, col2, ...)
Values (val1, val2, ...),
(val1, val2, ...);
*/
Insert Into film (title, description, release_year, language_id, rental_duration,
rental_rate, length, replacement_cost, rating, special_features)
Values ('The Dark Knight', 'Batman fights the Joker', 2008, 1, 3, 4.99, 152, 19.99, 'PG-13', 'Trailers');

/*
1) You have to give values in the same order as mentioned in the column names
2) You have to give the same data-type to the value as defined in the schema
3) If you don't define a column value
	- If column is nullable then the value will be null
    - If the column has default value defined then it will take the default value
    - If column is not nullable and doesn't have a default value, it will throw an error
*/