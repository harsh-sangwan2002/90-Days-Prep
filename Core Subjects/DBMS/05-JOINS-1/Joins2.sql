use sakila;

Select count(*)
From film
Join film_actor
On true;

Select count(*)
From film f
Join film_actor fa
On f.film_id = fa.film_id;

-- Where is not preferred in case of Join because it's not optimal
Select count(*)
From film f
Join film_actor fa
Where f.film_id = fa.film_id;

-- For every film I want to print film name and it's language
Select f.title, l.name
From film f
Join language l
On f.language_id = l.language_id;