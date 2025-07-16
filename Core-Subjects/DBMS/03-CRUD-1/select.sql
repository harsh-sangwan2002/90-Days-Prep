SELECT * From film;
/*
INSERT INTO table_name (col names)
VALUES (,,,,)
SQL is not case sensitive
*/
INSERT into film (title, description, release_year, language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features)
VALUES ('The Dark Knight','Batman fights the Joker', 2008, 1, 3, 4.99, 152, 19.99, 'PG-13', 'Trailers');

select title as film_name, film_id as id from film;

-- DISTINCT
select distinct rating from film;

-- Constants
select 1 from film;

select title, length/60 as duration_in_hours from film;
select title, floor(length/60) as duration_in_hours from film;
select title, round(length/60) as duration_in_hours from film;

-- Transfer data from one table to another
create table city_copy(
name varchar(100));

insert into city_copy
select city from city;

select * from city_copy;

select title, rating from film
where rating = "PG-13";

-- PG-13, G, PG
select title, rating from film
where rating In ('PG-13', 'G', 'PG');