commit;

set autocommit = 0;

/* Every session has a default transaction isolation level
TIL decides how you are going to look at the db with respect to other transactions
By default the TIL is Repeatable Read
1. Read Uncommitted
*/
show variables like 'transaction_isolation';

-- It will read uncommitted data from other transactions
set session transaction isolation level repeatable read;

Select * from film where film_id = 10;

update film set title = "uncommitted title" where film_id = 10;