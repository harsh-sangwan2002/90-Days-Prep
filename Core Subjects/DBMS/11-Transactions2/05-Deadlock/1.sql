use sakila;

commit;

set autocommit = 0;

Set session transaction isolation level serializable;

Select * from film where film_id = 1 for update;

Select * from film where film_id = 2 for update;