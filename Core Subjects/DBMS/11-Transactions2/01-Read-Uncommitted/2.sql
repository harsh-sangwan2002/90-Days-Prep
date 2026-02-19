use sakila;

commit;

show variables like 'transaction_isolation';

set session transaction isolation level read uncommitted;

Select * from film where film_id = 10;

rollback;