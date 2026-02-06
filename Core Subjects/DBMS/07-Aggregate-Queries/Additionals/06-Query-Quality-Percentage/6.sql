/*
We define query quality as:
"The average of the ratio between query rating and its position".

We also define poor query percentage as:
"The percentage of all queries with rating less than 3".

Write an SQL query to find each query_name, the quality and poor_query_percentage.
Both quality and poor_query_percentage should be rounded to 2 decimal places.

Return the result table ordered by query_name.
*/
Select 
    query_name,
    Round(Avg(rating/position),2) quality,
    Round(Sum(rating<3)/Count(query_name)*100,2) poor_query_percentage
From 
    queries
Group By
    query_name
Order By
    query_name;