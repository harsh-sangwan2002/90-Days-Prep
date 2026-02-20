commit;

Set session transaction isolation level serializable;

use sakila;

Select * from film where film_id between 1 and 3;

set autocommit = 0;