use sakila;

/*
for each row1 in A:
    for each row2 in B:
        if(cond1 is true)
            ans.add(row1+row2)
        
for each row in ans:
    if(con2 is true)
        ans2.add(row)

count_s_id = 0

for each row in ans2:
    if(row[s_id] is not null)
        count_s_id++

print(count_s_id)
*/
Select
From A
Join B
On cond1
Where cond2

Select count(*) from film;

-- Return all the rows from the film table
Select count(1) from film;

Select count("Grey Man") from film;

Select count(0) from film;

Select count(true) from film;

Select count(false) from film;

Select count(null) from film;