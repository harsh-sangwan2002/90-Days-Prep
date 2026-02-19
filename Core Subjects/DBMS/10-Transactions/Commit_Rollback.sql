use sakila;

set autocommit = false;

Select * from film;

Update film set title = "Harsh2" where film_id = 1;

Select * from film;

rollback;