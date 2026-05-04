use sakila;

-- I want to bring all the movies that were release between 2007 and 2009
Select * from film
Where release_year >= 2007 and release_year <= 200;

-- Between selects from [a,b] => between a and b inclusive
Select * from film
Where release_year Between 2007 and 2009;

-- Like is used for string pattern matching
-- I want to fetch all the movies having 'love' in the title
Select * from film
Where title like '%love%';

Insert Into film (title, release_year, language_id, rental_duration,
rental_rate, length, replacement_cost, rating, special_features)
Values ('The Dark Knight Rises', 2008, 1, 3, 4.99, 152, 19.99, 'PG-13', 'Trailers');

-- Is Null & Is Not Null
Select * from film
Where description Is null;

Select * from film
Where description Is Not null;

/*
Order By is used to sort the data based on a certain column
asc - ascending
desc - descending

If we have distinct in select statement then we can only order by those columns
*/
Select * from film
Order By title desc;

Select * from film
Order By release_year, description;

Select distinct name, yob from Student_Info Order By yob;

-- Limit & Offset are used to limit the number of rows
Select * from film
Limit 5 Offset 1000;

/*
Short answer: because OFFSET alone doesn’t define how many rows to 
return, it only tells the database how many rows to skip. 
Without a LIMIT, the query would mean “skip some rows and then 
return… everything else,” which is usually not what you want 
and isn’t even valid syntax in some systems.
*/
-- Select * from film
-- Offset 1000;

Update film
Set title = "SKYLAGS"
Where film_id = 1;

Select * from film;

/*
Delete - 
	1) Used to delete rows from the table based on where clause, 
    2) It is slower
    3) It can be rolled back
    4) Doesn't reset the PK
Truncate - 
	1) Delete rows from the table, 
    2) It is faster than delete
    3) Resets the PK
    4) Cannot be rolled back
Drop -
	1) Completely deletes the table schema of the table/db
    2) It is much faster than delete
    3) Cannot be rolled back
*/
Delete from film;