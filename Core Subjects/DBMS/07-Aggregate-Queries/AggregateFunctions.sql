use sakila;

Select count(*) from film;

Select count(1) from film;

Select count("Grey Man") from film;

Select count(0) from film;

Select count(true) from film;

Select count(false) from film;

Select count(null) from film;