use sakila;

select count(*) from film;

select * from film;

-- * denotes all the rows

-- Insert new row into a table
Insert into film (title, description, release_year, language_id, rental_duration, rental_rate, length, rating, replacement_cost, special_features)
values ('Mission Impossible', 'Ethan Hunt Movie', 2000, 1, 6, 1.12, 90, 'PG', 21.22, 'Deleted Scenes');

select film_id as id from film;

select title from film;

select distinct rating from film;

select title, 'Hello World' from film;

select count(1) from film;

-- create a replica of a table
create table city_copy
select city from city;

select title, rating from film
where rating = 'G';

select title from film
where title like 'a%r';

-- PG-13, G, PG
select * from film
where rating In ('PG-13', 'G', 'PG');

select * from film
where rating = 'PG-13' || release_year = 2006;