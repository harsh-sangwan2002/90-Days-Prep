commit;

use sakila;

Set session transaction isolation level serializable;

Select * from film where film_id between 1 and 3 for update;

set autocommit = 0;

commit;