/*
I want to bring all the movies released between 2000 and 2009
*/
Select * from film where release_year >= 2000 and release_year <= 2009;

Select * from film where release_year between 2000 and 2009;

-- Fetch all the films having love as substring in their title
Select film_id, title from film where title like "%love%";

-- Null
Select title from film where description Is Null;

/* 
Order By
asc - ascending
desc - descending
When DISTINCT is used, every column in ORDER BY must appear in the SELECT list.
*/
Select * from film order by description;

Select * from film order By release_year Limit 5;