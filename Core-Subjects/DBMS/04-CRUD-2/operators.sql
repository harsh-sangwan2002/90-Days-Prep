select * from film
where release_year>=2007 and release_year<=2009;

-- Including both the numbers
select * from film
where release_year between 2007 and 2009;

-- Using like
select * from film
where title like '%love%';

-- Is null and 

-- limit and offset
select * from film
limit 25 offset 101;

-- Update
update film
set title = 'skylags'
where film_id = 1;  

select * from film
where film_id = 1;