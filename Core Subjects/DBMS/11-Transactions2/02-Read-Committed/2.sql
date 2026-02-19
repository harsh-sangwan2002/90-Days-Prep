commit;

set session transaction isolation level read committed;

Select * from film where film_id = 15;

update film set title = "akad bakad" where film_id = 15;