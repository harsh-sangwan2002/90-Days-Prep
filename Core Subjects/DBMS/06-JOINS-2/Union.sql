Select * from film
Union
Select * from film_actor;

-- 15:00:38	Select * from film Union Select * from film_actor	Error Code: 1222. The used SELECT statements have a different number of columns	0.0021 sec

Select film_id from film
Union
Select film_id from film_actor;

-- Union removes the dupliactes
Select last_update from language
Union
Select last_update from film_actor;

Select last_update from language
Union All
Select last_update from film_actor;

-- Can combine different columns as well
Select film_id from film
Union
Select actor_id from film_actor;

Select film_id from film
Union
Select last_update from film_actor;