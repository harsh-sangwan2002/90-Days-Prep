use sakila;

Select * from film;

Select count(*) from film;

/*
I want to insert data into the film table

Insert Into table_name (col1, col2, col3, ...)
Values (val1, val2, val3, ...);

SQL is not case-sensitive
*/
Insert Into film (title, description, release_year, language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features)
Values('The Dark Knight', 'Batman fights the joker', 2010, 1, 6, 0.19, 60, 30.01, 'PG', 'Commentaries');