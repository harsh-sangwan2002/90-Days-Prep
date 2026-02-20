/*
Write an SQL query to report the device that is first logged in for each player.

Return the result table ordered by player_id in ascending order.
*/
Select 
    player_id,
    device_id
From 
    activity
Where
    event_date In
    (Select
        Min(event_date)
    From
        activity
    Group By
        player_id)
Order By
    player_id;