use sakila;

Select * from film;

Select * from film where film_id = 10;

/*
By default, the auto commit is true
*/
update film set title = "Umang's Movie" where film_id = 10;

set autocommit = 0;

commit;

/*
You want to execute four sql queries grouped together.
*/
update film
set title = "random title" 
where film_id = 10;

-- rollback -> reverts all updates done since the last commit
-- Anything that is committed cannot be rolled back
-- Uncommitted changes can be rolled back
rollback;