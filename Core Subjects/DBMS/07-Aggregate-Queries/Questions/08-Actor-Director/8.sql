/*
Write a SQL query for a report that provides the pairs (actor_id, director_id) where the actor has cooperated with the director at least three times.

Return the result table ordered by timestamp in ascending order.
*/
Select 
    actor_id,
    director_id
From 
    actorDirector
Group By
    actor_id, director_id
Having
    count(*) >= 3
Order By 
    timestamp;