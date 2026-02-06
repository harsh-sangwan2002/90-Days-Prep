/*
Write an SQL query to report the first login date (as 'first_login') for each player.

Return the result table ordered by player_id in ascending order.
*/
Select 
    player_id,
    Min(event_date) first_login
From 
    activity
Group By
    player_id
Order By 
    player_id;