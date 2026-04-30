use sakila;
/*
Select col1, col2, ...
From <table_name>

* denotes all the rows and columns
*/

Select * from film;

Select title from film;

Select title, description from film;

-- aliasing using as keyword
Select title, description as custom_name from film;

/*
Distinct gets applied on the set of columns
It removed the duplicates and return only unique values
*/
Select distinct rating from film;
Select distinct * from film;

Select distinct rating, release_year from film;

Select 1;

Select title, 'Hello World', 1 from film;
/*
Psuedo Code:
table = []
ans = []

for each row in table:
	ans.add(row)
    
for each row in ans:
	print(row['title'],'Hello World')
*/

/*
length column is in minutes
For each film get title and duration in hours
*/
Select title, round(length/60,0) duration_in_hours from film;

-- I want to create a new table with city column and add all the cities in the city column
Create table City_copy
(city VARCHAR(60));

Select * from city;

Insert Into city_copy
Select city from city;

Select * from City_copy;

Select * from city Where city_id%2 = 0;

-- I want to apply filters on the rows based on some condition
Select title, rating from film
Where rating = "PG-13";

-- Combine multiple conditions using conditional operators
Select * from film where rating = "PG-13" || release_year = 2006;
Select * from film where rating = "PG-13" or release_year = 2006;

/* != , <> */
Select * from film
Where rating <> "PG-13";

Select * from film
Where release_year>=2006 and release_year<=2009;

-- 'PG', 'PG-13', 'G'
Select * from film
Where rating = "PG" or rating = "G" or rating = "PG-13";

Select * from film
Where rating = "PG" or "G";