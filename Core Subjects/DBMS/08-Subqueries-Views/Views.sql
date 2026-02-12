use sakila;

Select * from film;

Create or replace view title_rel_year as 
Select title, release_year, description from film;

Select * from title_rel_year;