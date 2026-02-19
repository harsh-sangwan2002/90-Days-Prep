commit;

set autocommit = 0;

select * from film where film_id = 15;

-- I didn't confirm the value, so the row took an exclusive lock and any other transaction will not be able to update the same row
update film set title = "The Demon King" where film_id = 15;

show variables like 'transaction_isolation';

set session transaction isolation level read committed;

rollback;