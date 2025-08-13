use sakila;

select * from film;

select * from film
where release_year >= 2007 and release_year <= 2009;

-- between
select * from film
where release_year between 2007 and 2009;

-- like
select * from film
where title like '%love%';

-- update
update film
set title = 'Skylags'
where film_id = 1;

-- delete, going to delete all the rows from the table
delete from film;