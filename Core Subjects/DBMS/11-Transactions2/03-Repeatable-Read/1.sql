commit;

use sakila;

Select * from film where film_id = 15;

show variables like 'transaction_isolation';

set session transaction isolation level read uncommitted;

Update film set title = "Rep Read2" where film_id = 15;

Set autocommit = 0;

rollback;